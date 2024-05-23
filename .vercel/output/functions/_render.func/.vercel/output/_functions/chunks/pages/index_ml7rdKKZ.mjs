/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_CAHbMDKa.mjs';
import { h as getCategories, c as $$ListSection, d as $$ListItem, g as getPathFromCategory, $ as $$LayoutDefault, a as getPosts, b as getPostDescription } from './__Jhyn9mvi.mjs';
import { $ as $$Post, a as $$Pagination } from './__D_7U3iFt.mjs';

const $$Astro$1 = createAstro("https://millie-attic.vercel.app/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { translate: t } = Astro2.locals;
  const { category_map } = Astro2.locals.config;
  const categories = await getCategories();
  return renderTemplate`${renderComponent($$result, "LayoutDefault", $$LayoutDefault, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ListSection", $$ListSection, { "title": t("Categories") }, { "default": ($$result3) => renderTemplate`${Array.from(categories).map(([key, value]) => renderTemplate`${renderComponent($$result3, "ListItem", $$ListItem, { "title": key, "href": `/categories/${getPathFromCategory(key, category_map)}`, "description": t("categories_count", value.length) })}`)}` })} ` })}`;
}, "/Users/millieqiu/MillieDev/millie-blog/src/pages/categories/index.astro", void 0);

const $$file$1 = "/Users/millieqiu/MillieDev/millie-blog/src/pages/categories/index.astro";
const $$url$1 = "/categories";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://millie-attic.vercel.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getPosts()).slice(0, 5);
  const { translate: t } = Astro2.locals;
  return renderTemplate`${renderComponent($$result, "LayoutDefault", $$LayoutDefault, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section contain-layout un-flex="~ col gap-7.5"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "Post", $$Post, { "post": post }, { "default": ($$result3) => renderTemplate` <p class="line-clamp-4">${getPostDescription(post)}</p> ` })}`)} ${renderComponent($$result2, "Pagination", $$Pagination, { "showLeft": false, "showPageCount": false, "rightTitle": t("all_posts"), "rightUrl": "posts/page/1" })} </section> ` })}`;
}, "/Users/millieqiu/MillieDev/millie-blog/src/pages/index.astro", void 0);

const $$file = "/Users/millieqiu/MillieDev/millie-blog/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
