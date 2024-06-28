export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: "Millie's Attic",
  /** your name */
  author: "Millie Qiu",
  /** website description */
  desc: "Millie 的個人網站。在學習的道路上，試著將知識彙整成技術文章，並透過文字記錄自己的生活。",
  /** your deployed domain */
  website: "https://my-attic-millieqiuuuu.vercel.app/",
  /** your locale */
  locale: "zh-tw",
  /** theme style */
  themeStyle: "light",
  /** your socials */
  socials: [
    {
      name: "github",
      href: "https://github.com/millieqiu",
    },
    {
      name: "twitter",
      href: "https://x.com/Mi11ieeeHowdy",
    },
    // {
    //   name: "twitter",
    //   href: "https://x.com/Mi11ieeeHowdy",
    // }
  ],
  /** your header info */
  header: {
    twitter: "@Mi11ieeeHowdy",
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    // {
    //   name: "Daily",
    //   href: "/daily"
    // },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories"
    },
    {
      name: "About",
      href: "/about",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [
    // { name: "胡适", path: "hu-shi" },
  ],
  /** your comment provider */
  // comments: {
  //   disqus: {
  //     shortname: "typography-astro",
  //   },
  //   giscus: {
  //     repo: 'moeyua/astro-theme-typography',
  //     repoId: 'R_kgDOKy9HOQ',
  //     category: 'General',
  //     categoryId: 'DIC_kwDOKy9HOc4CegmW',
  //     mapping: 'title',
  //     strict: '0',
  //     reactionsEnabled: '1',
  //     emitMetadata: '1',
  //     inputPosition: 'top',
  //     theme: 'light',
  //     lang: 'zh-CN',
  //     loading: 'lazy',
  //   },
  //   twikoo: {
  //     envId: "https://twikoo-tau-flame.vercel.app",
  //   }
  // }
}

