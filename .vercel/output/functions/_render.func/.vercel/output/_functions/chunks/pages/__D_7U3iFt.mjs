/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, k as renderSlot, i as renderComponent } from '../astro_CAHbMDKa.mjs';
import { f as formatDate, g as getPathFromCategory, T as THEME_CONFIG, a as getPosts, $ as $$LayoutDefault } from './__Jhyn9mvi.mjs';
/* empty css                           */

const $$Astro$2 = createAstro("https://millie-attic.vercel.app/");
const $$Post = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Post;
  const { post } = Astro2.props;
  const { translate: t } = Astro2.locals;
  function getCategoryUrl(category) {
    return `/categories/${getPathFromCategory(category, THEME_CONFIG.category_map)}`;
  }
  return renderTemplate`${maybeRenderHead()}<article class="heti"> <header> <h1 class="post-title!"> <a${addAttribute(`/posts/${post.slug}/`, "href")}>${post.data.title}</a> </h1> <div class="mt-2 text-3.5"> <span>${t("posted_at")}</span> <time>${formatDate(post.data.pubDate)}</time> ${post.data.categories && post.data.categories.map((category) => renderTemplate`<a class="ml-2.5"${addAttribute(getCategoryUrl(category), "href")}>
# ${category} </a>`)} </div> </header> ${renderSlot($$result, $$slots["default"])} </article>`;
}, "/Users/millieqiu/MillieDev/millie-blog/src/components/Post.astro", void 0);

const $$Astro$1 = createAstro("https://millie-attic.vercel.app/");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { translate: t } = Astro2.locals;
  const { showLeft = true, showRight = true, leftTitle, rightTitle, leftUrl, rightUrl, showPageCount = true, currentPage, totalPage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="mt-5"> ${showPageCount && renderTemplate`<p class="mb-2.5"> ${t("page_number", currentPage)} / ${t("page_count", totalPage)} </p>`} <p class="flex items-center gap-2"> ${showLeft && renderTemplate`<span class="inline-flex items-center"> <i class="i-mdi-chevron-double-left icon"></i> <a${addAttribute(leftUrl, "href")}>${leftTitle}</a> </span>`} ${showRight && renderTemplate`<span class="inline-flex items-center"> <a${addAttribute(rightUrl, "href")}>${rightTitle}</a> <i class="i-mdi-chevron-double-right icon"></i> </span>`} </p> </footer> <!-- <footer class="mt-5">
  <p class="mb-2.5">{t('page_number', page.currentPage)} / {t('page_count', page.lastPage)}</p>
  <p class="flex items-center gap-2">
    <span class="inline-flex items-center">
      <i class="i-mdi-chevron-double-left icon"></i>
      {page.url.prev ? <a href={page.url.prev}> {t('prev')} </a> : <span>{t('prev')}</span>}
    </span>

    <span class="inline-flex items-center">
      {page.url.next ? <a href={page.url.next}>{t('next')}</a> : <span>{t('next')}</span>}
      <i class="i-mdi-chevron-double-right icon"></i>
    </span>
  </p>
</footer> -->`;
}, "/Users/millieqiu/MillieDev/millie-blog/src/components/Pagination.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$PostComment = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section class="giscus mx-auto my-5 w-full"></section> <script src="https://giscus.app/client.js" data-repo="millieqiu/millie-blog" data-repo-id="R_kgDOL889XA" data-category="Announcements" data-category-id="DIC_kwDOL889XM4CfbtC" data-mapping="pathname" data-strict="0" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="bottom" data-theme="noborder_light" data-lang="zh-TW" data-loading="lazy" crossorigin="anonymous" async><\/script>'])), maybeRenderHead());
}, "/Users/millieqiu/MillieDev/millie-blog/src/components/PostComment.astro", void 0);

const $$Astro = createAstro("https://millie-attic.vercel.app/");
const getStaticPaths = async ({}) => {
  const posts = await getPosts();
  return posts.map((post, idx) => {
    const prev = posts[idx - 1];
    const next = posts[idx + 1];
    return {
      params: { slug: post.slug },
      props: { entry: post, next, prev }
    };
  });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry, prev, next } = Astro2.props;
  const { Content } = await entry.render();
  const { translate: t } = Astro2.locals;
  function getUrl(slug) {
    return `/posts/${slug}`;
  }
  return renderTemplate`${renderComponent($$result, "LayoutDefault", $$LayoutDefault, { "title": entry.data.title, "desc": entry.data.description, "banner": entry.data.banner }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Post", $$Post, { "post": entry }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, {})} ` })} ${renderComponent($$result2, "Pagination", $$Pagination, { "showLeft": Boolean(prev), "leftTitle": `${t("prev_post")}: ${prev?.data.title}`, "leftUrl": getUrl(prev?.slug), "showRight": Boolean(next), "rightTitle": `${t("next_post")}: ${next?.data.title}`, "rightUrl": getUrl(next?.slug), "showPageCount": false })}  ${renderComponent($$result2, "PostComment", $$PostComment, {})} ` })}  `;
}, "/Users/millieqiu/MillieDev/millie-blog/src/pages/posts/[...slug].astro", void 0);

const $$file = "/Users/millieqiu/MillieDev/millie-blog/src/pages/posts/[...slug].astro";
const $$url = "/posts/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Post as $, ____slug_ as _, $$Pagination as a };
