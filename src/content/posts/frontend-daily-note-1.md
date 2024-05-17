---
title: Daily Notes 1：String in Modern JS
pubDate: 2024-03-03
# description: A simple example of a Markdown blog post.
# image: './images/daily-note-1.png'
tags: ['JavaScript']
categories: ['Frontend']
# draft: false
---

我目前加強 JavaScript 基礎的方式是 Udemy 上一堂由 Jonas Schmedtmann 老師開授的 [The Complete JavaScript Course 2023: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course/)。

當時有趁著打折購入這門課，真的覺得很超值，老師將觀念講解得很詳細，對於課程編排（例如哪個部份應該先上、哪個部份的觀念要留到後面的章節再詳細補強）也有一套自己的原則，更新教學內容也很頻繁，因此不用擔心觀念落後的問題，我個人上得蠻開心的 XD

推薦給對自己的英文能力有信心、不會聽到睡著，或想嘗試看看全英語授課的朋友囉～🙌

---

## 題目說明

今天做了一份老師在章節中穿插的 Coding Challenge，題目是將底下的格式的字串轉換成小駝峰 (low camel case) 格式，加上 ✅ Emoji，並移除每一列中不必要的空白字元：

```plaintext
USer_nAme
Some_Variable
  calculate_AGE
----------------------
// 轉換成
userName       ✅
someVariables  ✅✅
calculateAge   ✅✅✅
```

這份練習的目的是為了讓我們更熟練運用 String Methods，來看一下這題的解法以及我學到的東西。

## 解題方法

1. 將整段字串依題目要求貼到 Textarea 裡，再分別取出每一列的內容，因此需要認識換行符號 `\n` 及 `split()` 方法。

```javascript
const text = document.querySelector('textarea').value;
const rows = text.split('\n');
console.log(rows);
// ['USer_nAme', 'Some_Variable', '  calculate_AGE']
```

`split()` 的基本語法：

`str.split([separator[, limit]])`

* split() 結果返回一個**字串陣列**

* 參數 limit 是非必要的，表示最多返回幾個分隔字串

* seperator 參數用來指定分隔符號

2. 利用 `for..of` loop 讀取陣列中的每個元素，再透過 `toLowerCase()`、`trim()` 等方法整理格式。

    當收到字串型態的資料時，通常會先透過 `toLowerCase` 將之轉換成小寫，能夠方便我們進行後續的整理；而 `trim()` 方法能夠幫助我們移除字串中不必要的空白字元。

    到這個步驟為止，我們已經能成功將 Textarea 中的原始資料轉換成小駝峰格式了🎉！

```javascript
for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_'); //解構賦值
    
    const output = `${first}${second.replace(
      second[0], 
      second[0].toUpperCase()
      )}`;

      console.log(output);
  }
// userName
// someVariable
// calculateAge
```

3. 最後，還需要在每一列尾加上 ✅ 的 Emoji，數量需隨著每列元素遞增，且可以發現每列的 Emoji 都會在同樣的位置長出來。

    我們要先讓前面的小駝峰字串都達到一樣的長度，聽起來有點抽象，但只要用 `padEnd()` 方法就能實現。

    > The `padEnd()` method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string. - [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)

    簡單來說，<mark>這個方法會幫助我們在字串末端填充特定的字符，直到字串達到我們指定的長度</mark>。套用在題目上的話會變成：

```javascript
console.log(`${output.padEnd(20, '')}${'✅'.repeat(i + 1)}`);
//userName              ✅
//someVariable          ✅✅
//calculateAge          ✅✅✅
```

:::tip[解說：]
在 output 的長度達到 20 以前，會不斷填充空白字元，如此一來最後 `output.lenght` 的結果皆會等於 20。（與之相對應的也有 `padStart` 方法，將重複的字符填充在最前面，可以到 [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) 網站上看更詳細的說明。）
:::

再利用 `repeat()` 方法重複印出 ✅ Emoji，就大功告成囉～ 完整的程式碼如下：

```javascript
document.querySelector('button').addEventListener('click', function() {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    
    const output = `${first}${second.replace(
      second[0], 
      second[0].toUpperCase()
      )}`;

      console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
  }
})
```

## 結語

以上簡短說明今天的練習題以及其中用到的小技巧！

覺得自己寫文章的速度還是太慢了，希望未來能夠邊思考、整理思緒，一邊產出文章，才不會花太多時間在經營部落格上面。畢竟初衷是發表文章當作筆記，能夠好好練習程式碼的運用才是最重要的。

---

Reference：

> [JavaScript String split() (字串切割)](https://www.fooish.com/javascript/string/split.html)
>
> [TypeError: trim is not a function in JavaScript\[Solved\]](https://bobbyhadz.com/blog/javascript-typeerror-trim-is-not-a-function)
>
> [字串 - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String) - 查看更多字串的跳脫符號

```plaintext
有任何想法想分享或協助勘誤，歡迎留言交流指教！🦀
```