/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_CAHbMDKa.mjs';
import { a as getPosts, b as getPostDescription, $ as $$LayoutDefault } from './__Jhyn9mvi.mjs';
import { $ as $$Post, a as $$Pagination } from './__D_7U3iFt.mjs';

const $$Astro = createAstro("https://millie-attic.vercel.app/");
const getStaticPaths = async ({ paginate }) => {
  const posts = await getPosts();
  return paginate(posts, { pageSize: 5 });
};
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { translate: t } = Astro2.locals;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "LayoutDefault", $$LayoutDefault, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section contain-layout un-flex="~ col gap-7.5"> ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "Post", $$Post, { "post": post }, { "default": ($$result3) => renderTemplate` <p class="line-clamp-4">${getPostDescription(post)}</p> ` })}`)} ${renderComponent($$result2, "Pagination", $$Pagination, { "showLeft": Boolean(page.url.prev), "leftTitle": t("prev"), "leftUrl": page.url.prev, "showRight": Boolean(page.url.next), "rightTitle": t("next"), "rightUrl": page.url.next, "currentPage": page.currentPage, "totalPage": page.lastPage })} </section> ` })}`;
}, "/Users/millieqiu/MillieDev/millie-blog/src/pages/posts/page/[page].astro", void 0);

const $$file = "/Users/millieqiu/MillieDev/millie-blog/src/pages/posts/page/[page].astro";
const $$url = "/posts/page/[page]";

export { $$page as default, $$file as file, getStaticPaths, $$url as url };
