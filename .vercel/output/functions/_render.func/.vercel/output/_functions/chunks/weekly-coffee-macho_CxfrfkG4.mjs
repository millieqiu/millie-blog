import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CAHbMDKa.mjs';

const html = "<p><img src=\"/src/images/cafe-macho.png\" alt=\"coffee macho\"></p>\n<p>原本早上看天氣預報，很猶豫到底要不要出門，怕路上遇到大雨會很麻煩，但想了想禮拜六已經待在家一整天了，決定還是出門走走（畢竟我是個連續兩天待在家裡就會發霉的人）。</p>\n<p>小插曲是我還被 google 地圖 gank，前一天晚上查只要走 10 分鐘，所以我預計咖啡廳一開門就可以抵達，沒想到出門前再查就變成要走 16 分鐘，公車又剛好在我面前跑掉，當時真的覺得糟糕透頂。</p>\n<p>幸好咖啡廳彌的氛圍補了這些不美好，大家都專心在做自己的事情（真的很喜歡這種一起做事的感覺），日式炒麵好吃、紅茶好喝、冷氣溫度也恰到好處……唯一美中不足的是我明明要用電腦卻挑了吧台的位置，桌子深度不夠，所以一天下來手腕有點痛😮‍💨</p>\n<p>回家的時候特意走一條平常不會走的路，經過一間看起來很好吃的蛋塔店，原本打算下次再來買，但轉念一想都難得走到這裡了，乾脆今天就買來吃吃看吧，如果等到下次就不知道會是什麼時候了。</p>\n<p>旁邊還剛好有一間需要排隊的麵線臭豆腐專賣店，索性也買來當晚餐吃～感謝今天有決定要出門的自己，偶爾繞點遠路走到陌生的地方，就可以看見跟平常不一樣的風景、吃到沒吃過的美食🥹</p>";

				const frontmatter = {"title":"2024/05/05 早秋咖啡 ☕","pubDate":"2024-05-12T00:00:00.000Z","tags":["coffee"],"categories":["生活"]};
				const file = "/Users/millieqiu/MillieDev/millie-blog/src/content/posts/weekly-coffee-macho.md";
				const url = undefined;
				function rawContent() {
					return "\n![coffee macho](/src/images/cafe-macho.png)\n\n原本早上看天氣預報，很猶豫到底要不要出門，怕路上遇到大雨會很麻煩，但想了想禮拜六已經待在家一整天了，決定還是出門走走（畢竟我是個連續兩天待在家裡就會發霉的人）。\n\n小插曲是我還被 google 地圖 gank，前一天晚上查只要走 10 分鐘，所以我預計咖啡廳一開門就可以抵達，沒想到出門前再查就變成要走 16 分鐘，公車又剛好在我面前跑掉，當時真的覺得糟糕透頂。\n\n幸好咖啡廳彌的氛圍補了這些不美好，大家都專心在做自己的事情（真的很喜歡這種一起做事的感覺），日式炒麵好吃、紅茶好喝、冷氣溫度也恰到好處……唯一美中不足的是我明明要用電腦卻挑了吧台的位置，桌子深度不夠，所以一天下來手腕有點痛😮‍💨\n\n回家的時候特意走一條平常不會走的路，經過一間看起來很好吃的蛋塔店，原本打算下次再來買，但轉念一想都難得走到這裡了，乾脆今天就買來吃吃看吧，如果等到下次就不知道會是什麼時候了。\n\n旁邊還剛好有一間需要排隊的麵線臭豆腐專賣店，索性也買來當晚餐吃～感謝今天有決定要出門的自己，偶爾繞點遠路走到陌生的地方，就可以看見跟平常不一樣的風景、吃到沒吃過的美食🥹\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
