/* empty css                          */
import { f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_CAHbMDKa.mjs';
import { a as getPosts, c as $$ListSection, d as $$ListItem, f as formatDate, $ as $$LayoutDefault } from './__Jhyn9mvi.mjs';

const $$Archive = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getPosts();
  const postByYear = /* @__PURE__ */ new Map();
  posts.forEach((post) => {
    const pubDate = post.data.pubDate ?? /* @__PURE__ */ new Date();
    const year = pubDate.getFullYear();
    if (!postByYear.has(year)) {
      postByYear.set(year, []);
    }
    postByYear.get(year).push(post);
  });
  return renderTemplate`${renderComponent($$result, "LayoutDefault", $$LayoutDefault, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div un-flex="~ col gap-4"> ${Array.from(postByYear.entries()).map(([year, posts2]) => renderTemplate`${renderComponent($$result2, "ListSection", $$ListSection, { "title": year }, { "default": ($$result3) => renderTemplate`${posts2.map((post) => renderTemplate`${renderComponent($$result3, "ListItem", $$ListItem, { "title": post.data.title, "href": `/posts/${post.slug}/`, "description": formatDate(post.data.pubDate) })}`)}` })}`)} </div> ` })}`;
}, "/Users/millieqiu/MillieDev/millie-blog/src/pages/archive.astro", void 0);

const $$file = "/Users/millieqiu/MillieDev/millie-blog/src/pages/archive.astro";
const $$url = "/archive";

export { $$Archive as default, $$file as file, $$url as url };
