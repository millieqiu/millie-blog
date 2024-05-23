const id = "frontend-daily-note-3.md";
						const collection = "posts";
						const slug = "frontend-daily-note-3";
						const body = "\n今天公司的前輩介紹了三種使用在 `link` 標籤上的效能優化的方法，可以改變瀏覽器下載資源的優先度－－也就是先讓網站會用到的檔案「偷跑」，以免網站內容過多時會卡頓、loading 太久，以下簡單將重點稍微整理。\n\n<div style=\"width:480px\"><iframe allow=\"fullscreen\" frameBorder=\"0\" height=\"320\" src=\"https://giphy.com/embed/u2wg2uXJbHzkXkPphr/video\" width=\"480\"></iframe></div>\n\n## 載入順序\n\n一般來說，瀏覽器會先讀取 HTML 檔案，Render 出整個畫面的結構，當需要時再下載及讀取 CSS 及 JavaScript，一邊繼續渲染畫面，有時會讓使用者必須等待渲染過程中的空白畫面或閃現醜醜的純 HTML 架構。\n\n## Preload\n\n`preload` 的作用是告訴瀏覽器在頁面初始化時**優先載入一定會用到的資源**。\n\n使用方法如下：\n\n```xml\n<link rel=\"preload\" as=\"script\" href=\"super-important.js\">\n<link rel=\"preload\" as=\"style\" href=\"critical.css\">\n```\n\n其中，`as` 屬性用來定義需要提前加載的資源類型，舉個例子，假設我們指定 as 的值是 style，也就是把它當作 CSS 資源，則這份資源的優先度將被提升得更高。\n\n雖然 `as` 這個屬性是可加可不加，但如果沒加的話瀏覽器還是會有警告提醒你，所以可以的話還是設定一下比較好。\n\n## Prefetch\n\n`prefetch` 這個屬性是在告訴瀏覽器：「這資源我等等會用到，有空的話幫我先下載」。等瀏覽器閒置時先下載好的資源會被放在 cache 裡面，真正要使用時再拿出來讀取。\n\n```xml\n<link rel=\"prefetch\" href=\"/public/app.08343a72.js\" as=\"script\">\n```\n\n資源將會等頁面完全下載完以後，以 Lowest 優先度下載。通常使用的情境會是「確定使用者很常會點到」的其中一個頁面。\n\n又或者當今天有一個必須要顯示的圖片（例如 icon 等），想在即使沒有網路的情況下也能看到、不會破圖，也可以使用此方法！\n\n## Preconnect\n\n`preconnect` 的作用是讓網站提前和第三方資源建立連線。比方說使用 google font 字體、拿取 Web API 資料等，讓瀏覽器提前知道我們將會跟這個網站連線。\n\n---\n\n以上就是這次簡單介紹三種前端效能優化方法，感謝閱讀 :D 如果想看更詳細的資料，可以看看下方的延伸閱讀 👇\n\nReference：\n\n> [性能优化之 preload、prefetch、preconnect 的区别与使用](https://juejin.cn/post/7128400578467594248) <br>\n> [\\[教學\\] Preload, Prefetch 和 Preconnect 的差異](https://www.shubo.io/preload-prefetch-preconnect/) <br>\n> [Browser Resource Hints: preload, prefetch, and preconnect](https://www.debugbear.com/blog/resource-hints-rel-preload-prefetch-preconnect) <br>\n> [Preload, Preconnect, Prefetch: Improve Your Site's Performance with Resource Hints](https://nitropack.io/blog/post/resource-hints-performance-optimization)\n\n```plaintext\n有任何想法想分享或協助勘誤，歡迎留言交流指教！🧛‍♂️\n```";
						const data = {title:"Daily Notes 3：preload、prefetch、preconnect 的差異及用法",pubDate:new Date(1709596800000),categories:["Frontend"]};
						const _internal = {
							type: 'content',
							filePath: "/Users/millieqiu/MillieDev/millie-blog/src/content/posts/frontend-daily-note-3.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
