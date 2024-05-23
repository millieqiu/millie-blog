import rss from '@astrojs/rss';
import { a as getPosts, T as THEME_CONFIG } from './__Jhyn9mvi.mjs';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();
const { title, desc, website, author } = THEME_CONFIG;
async function GET(_context) {
  const posts = await getPosts();
  const allowedTags = sanitizeHtml.defaults.allowedTags.concat(["img"]);
  return rss({
    title,
    description: desc,
    site: website,
    items: posts.map((post) => {
      return {
        link: `/posts/${post.slug}/`,
        author,
        content: sanitizeHtml(parser.render(post.body), { allowedTags }),
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        customData: post.data.customData,
        categories: post.data.categories,
        commentsUrl: post.data.commentsUrl,
        source: post.data.source,
        enclosure: post.data.enclosure
      };
    }),
    stylesheet: "/pretty-feed-v3.xsl"
  });
}

export { GET };
