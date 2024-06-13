---
title: JS 變數宣告：淺談 var、let、const 的差異
pubDate: 2024-03-05
# description: A simple example of a Markdown blog post.
# image: './images/var-const-let.png'
tags: ['JavaScript']
categories: ['Frontend', 'JavaScript']
# draft: false
---

會想寫這篇文的原因，是某天跟同事聊天的過程中，聊到在 JS 宣告變數時幾乎很少用到 `var`，雖然知道這種宣告變數的方式跟 `let`、`const` 有差異，具體而言我卻說不出為什麼，只依稀記得跟作用域有關......。

為了往後討論這個問題時，都能像個 JS 大師般侃侃而談，我回家後立刻將這題好好鑽研一番，也順便做了筆記，如果以後忘記了隨時都能拿出來複習 XD。

---

# 前言

`var`、`let` 以及 `const` 都是在 JavaScript 用來做變數宣告的保留字，在 JavaScript 早期只有 `var`，直到 ES6 時才加入了 `let` 與 `const` 。

這次，我將分別根據**作用域**、**用途**、以及**提升**（Hoisting）等特性來說明它們的不同。

# 作用域的差別

`var` 宣告的變數可以為「全域作用域」或「函式作用域」，但 `let` 或 `const` 則是以「區塊作用域」作為範圍。

> 想了解 JavaScript 中作用域，可以參考我之前寫過的[這篇文](/posts/tech/frontend-scope)

# 用途的差別

不囉嗦，先上個程式碼當範例：

```javascript
var greeter = "Hi :)";
var greeter = "Say hello instead";

console.log(greeter); // Say hello instead
```

可以發現原本第一行的宣告的變數被覆蓋掉了，會造成這個結果是因為 `var` 可以重複宣告。而 `let` **可以重新賦值，但不能重複宣告**，所以會如下面這樣：

```javascript
let greeter = "Hi :)";
let greeter = "Say hello instead";

console.log(greeter);
// Uncaught SyntaxError: Identifier 'greeter' has already been declared
```

但如果換成下面這種方法就可以：

```javascript
let greeter = "Hi :)";
greeter = "Say 你好 instead :)";

console.log(greeter); // Say 你好 instead :)
```

至於 `const`，是更嚴謹的宣告變數，其實 const 是常數「Constant」縮寫而來的，所以顧名思義 const 就是宣告常數的意思，無法被重新宣告、更無法被重新賦值哦！

# 提升（Hoisting）的差別

Hoisting 這個主題也是 JS 裡面數一數二困擾的，我也蠻感興趣的，正打算改天再另外寫一篇文來講解，因此這篇不會著墨太多 Hositing 的特性，如果想了解的也可以先看胡立大大寫的[這篇](https://blog.techbridge.cc/2018/11/10/javascript-hoisting/)。

目前我們只需要知道：

> 💡 **提示**
>
> Javascript 在程式的編譯階段，會先把宣告的變數和函式放在程式的頂端，等到實際執行時在賦予其值。

注意這邊指的是一個概念上的提升，並不代表 JS 在編譯時會真的去更動程式碼的位置。

其中又因為 `var` 有著「提升」的特性，會造成以下這種弔詭的情況：

```javascript
console.log(i); // undefined
var i = 5;
```

會印出 undefined 即是代表：雖然我們看不見，但其實在 `console.log(i)` 之前，i 就已經被宣告了，只是尚未賦值。

但是 `let` 與 `const` 則不會，而是會進到[暫時死區 (TDZ)](https://www.freecodecamp.org/news/what-is-the-temporal-dead-zone/)，因此在 `let` 與 `const` 宣告變數前使用該變數，會出現錯誤：

```javascript
console.log(i);
let i = 5;
// Uncaught ReferenceError: Cannot access 'i' before initialization
```

---

以上就是這次的「淺談 var、let 與 const 的差異」，希望會你們有幫助，也希望下次自己不要再忘記這些觀念了！

Reference：

> [在 JavaScript 中用 var, let, 以及 const 有什麼差別？什麼時候該用哪個？](https://www.explainthis.io/zh-hant/swe/js-var-let-const-in-javascript)
>
> [JS 宣告變數， var 與 let / const 差異](https://www.programfarmer.com/articles/2020/javascript-var-let-const-for-loop)
>
>[JavaScript 中的 Var、Let 和 Const 有什么区别](https://www.freecodecamp.org/chinese/news/javascript-var-let-and-const/)
>
> [\[JavaScript\] 談var、let、const差異之var你這個矯情的賤人](https://hackmd.io/@bookbasketball/SJ1lqTzSt)

```plaintext
有任何想法想分享或協助勘誤，歡迎留言交流指教！🐰
```