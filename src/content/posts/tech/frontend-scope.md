---
title: 我想一次搞懂！JavaScript ES6 的作用域
pubDate: 2024-06-13
# description: A simple example of a Markdown blog post.
# image: './images/var-const-let.png'
tags: ['JavaScript']
categories: ['Frontend', 'JavaScript']
# draft: false
---

# 作用域（Scope）

作用域簡單來說可以想成是「變數的存活範圍、有效範圍」，超出其自身作用域的函數，就無法被存取或訪問。


JavaScript 的作用域分為三種，我們將分別一一來講述：

- 全域作用域（Global Scope）
- 函式作用域（Function Scope）
- 區塊作用域（Block Scope）

## 一、全域作用域

是 JavaScript 中**最外層**的作用域，能夠在程式碼中的任何地方使用。

```javascript
let a = 10; // 在全域作用域底下的變數 a 即是所謂的「全域變數」
function useFunc() {
    a = a + 1; // 在函式內也能夠存取變數 a
}
useFunc();
console.log(a); // 11
```

## 二、函式作用域

在函式內宣告的變數，皆屬於「函式作用域」的範圍，若在函式以外的地方想存取該變數的話，則為拋出錯誤。

```javascript
function useFunc() {
 let a = 10;
}
console.log(a); // Uncaught ReferenceError: a is not defined
```

## 三、區塊作用域

區塊作用域是 ES6 之後發展出來的新作用域。在這邊「區塊」的定義是指例如 `for` 或 `if` 時所用到的花括號 `{}` 包起來的範圍。

```javascript
function useFunc() {
	if (true) {
  	let a = 10;
  }
  console.log(a); // 在區塊作用域以外無法存取 a 變數
}

useFunc(); // Uncaught ReferenceError: a is not defined
```

要特別注意的是，只有由 `let` 及 `const` 所宣告的變數才會受到這個作用域的範圍限制，若在區塊內使用 `var` 宣告的話則不受此限。（這也是為什麼會建議使用 `let` 跟 `const` 來宣告變數，因為使用 `var` 容易造成變數的污染）

改寫剛剛上面的例子，把 `let` 換成 `var` 的話，結果則會如下：

```javascript
function useFunc() {
	if (true) {
  	var a = 10;
  }
  console.log(a); // var 宣告的變數不支援區塊作用域
}

useFunc(); // 10
```

# 作用域鏈（Scope Chain）

根據 [MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Scope) 的定義，子層可以訪問父層作用域的變數，但反之則不行。

因此當我們在子層呼叫一個尚未被定義的變數時，JavaScript 就會往父層上的作用域去尋找，若直到全域作用域還是沒找到，則會拋出錯誤。這種一層接著一層、由內向外尋找的概念，就是所謂的「作用域鏈」（Scope Chain）。

```javascript
const num = 10;
function find() {
    console.log(num); // 10
}
find();
```

---

Reference：

> [MDN - Scope](https://developer.mozilla.org/zh-CN/docs/Glossary/Scope)
>
> [Javascript 的作用域 (Scope) 與作用域鏈 (Scope Chain) 是什麼?](https://www.explainthis.io/zh-hant/swe/what-is-scope-and-scope-chain)
>
> [[筆記]-JavaScript 作用域與作用域鏈是什麼?關於作用域的4個觀念](https://jianline.com/javascript-scope-and-scope-chain/)

```plaintext
有任何想法想分享或協助勘誤，歡迎留言交流指教！🐰
```