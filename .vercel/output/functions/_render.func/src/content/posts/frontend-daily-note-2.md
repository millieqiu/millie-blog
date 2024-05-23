---
title: Daily notes 2：什麼是 Callback function？
pubDate: 2024-03-04
# description: A simple example of a Markdown blog post.
# image: './images/daily-note-2.png'
tags: ['JavaScript']
categories: ['Frontend']
# draft: false
---

本篇文章是我在 Udemy 上加強 JavaScript 基礎的學習筆記。  
這兩小節的課程中，老師先介紹了「First-class Function」以及「Higher-order Function」的差別，接著再舉一段簡單的程式碼範例讓我們了解什麼是 **Callback function**。

---

# First-class Function

JavaScript 是擁有 First-class Function（一級函式）特性的程式語言。

* JS 將 function 當作一等公民

* 將 function 視為是一種「值」（Value）

* function 是一種物件型態的資料（`typeOf function` = Object）

由於上面特殊的定義，我們也可以對 function 做許多對其他資料型別的變數也可以操作的行為，包含：

1. 將函式儲存成變數（透過 [Function Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)）

2. 將函式儲存成一種物件的方法（Method）

```javascript
const counter = {
    value: 23;
    inc: function() {this.value ++}
}
```

3. 將 function 當作參數代入另一個函式中（最簡單的例子就是 `addEventListener`）

4. 可以在一個 function 中回傳（return）另一個 function

5. 擁有 function 自己的方法（例如 `bind`）

也是因為 First-class Function 的特性，才讓我們能創造出並使用**高階函式（Higher-Order Function）**。

# Higher-Order Function

高階函式（Higher order function）是指當<mark>一個函式可以接受另一個函式作為參數</mark>或者<mark>返回一個函式作為結果的函式</mark>。

第一個情況，我們以事件偵聽的例子（🌰）來說明：

```javascript
const greet = () => console.log('Hello!');
btn.addEventListener('click', greet);
```

在上述的程式碼中，`addEventListener` 接收了 `greet` 函式作為參數，由此可知它就是所謂的**高階函式**；而 `greet` 函式則是我們後續會提到的 **回呼函式**（Callback Function）。

> 💡 **提示**
>
> 所謂的「Callback function」其實就是「把函式當作另一個函式（Higher-order Function）的參數，透過另一個函式來呼叫它」。

第二種情況的範例程式碼如下：

```javascript
function count() {
    let counter = 0;
    return function() {
        counter++;
    }''
}
```

其中 `count` 函式就是 Higher-order function，而被 return 的函式則是所謂的 **Returned function**。不過 Returned function 的用法又更進階了，目前在這個小節並沒有被提到，會在其他篇作補充。

看到這裡，有些人可能會疑惑，「First-class function」跟「Higher-order function」聽起來很類似，難道它們不是同一件事嗎？

答案是......NO ❌！

First-class function 只是**一個特性**，代表「Function 是一個 Value」這個概念。不只 JS ，其他像是 Go、Python 等語言也都支持這個特性。

然而 Higher-order function 則是在實際的程式碼中會出現的一種函式，而能夠實現這類函式的原因，就歸功於前面提到過的 First-class function 的存在。

---

# Callback Function

以下用一段簡單的程式碼來帶大家瞭解什麼是「Callback function」：

```javascript
// 將字串的第一個單字轉換成大寫
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

// 呼叫 upperFirstWord 函式
transformer('JavaScript is the best!', upperFirstWord);

// 列印結果：
// Original string: JavaScript is the best!
// Transformed string: JAVASCRIPT is the best!
// Transformed by: upperFirstWord
```

在第 14 行，我們呼叫 `transformer()` 這個函式，它就是前面提到過的高階函式（Higher-order function），並在參數 fn 中代入 `upperFirstWord` 函式，也就是所謂的 Callback function。

我們並沒有直接呼叫 `upperFirstWord()` 這個函式，而是將其作為參數傳遞，後續再讓 `transformer()` 函式來呼叫它。

透過上面的例子，也不難發現其實 <mark>Callback function 跟一般的函式沒什麼不同，差別在於被呼叫執行的時機</mark>。

在 JavaScript 的世界中，經常可以看到 Callback function 的用法。它給我們帶來以下幾點好處：

1. 幫助我們能更輕鬆地將程式碼分割成「**可以重複使用**」（reusabel）以及「**相互有關聯**」（interconnected）的段落。

2. **幫助我們實現「物件抽象化」（Abstraction）**。

> 💡 **提示**
>
> 抽象化（Abstraction）是物件導向程式設計（Object-Oriented Programming）的重要概念之一。簡單來說，指的是當程式執行時，能夠隱藏另一部分程式碼背後的運作的細節。

以上方的範例來看，`tranformer()` 函式在運作時，需要關注的事情就只有「能否順利將 input 中字串轉換成我們需要的格式」，因此並不在乎背後複雜的機制是如何將字串轉換成大寫的。

在這邊先大略提一個概念，剩下的細節會在老師後面教到「物件導向程式語言」時再回來補充。

不過需要注意的是，若 Callback function 的設計及使用不當，讓函式之間的相依過深，callback 多層之後產生的「波動拳」就會難以維護，形成所謂的「Callback hell」。

![Callback Hell Image](/src/images/callback-hell.jpeg)

可以說 Callback function 會是 JS 課程中數一數二重要的單元，老師在章節的末尾千交代萬囑咐一定要好好釐清當中的觀念，也是我這次覺得提筆做筆記的原因～✏

希望這篇文能夠幫助到跟我一樣剛在學習的人，快速建立一個觀念，背後還有很多複雜的機制跟原理，就讓大家自行去挖掘囉！

---

Reference：

> [\[筆記\] JavaScript 中函式就是一種物件 ─ 談談 first class function（一等公民函式）](https://pjchender.blogspot.com/2016/03/javascriptfunctionobjects.html) <br>
> [JavaScript 一級函式 （First Class Functions）](https://www.casper.tw/development/2020/09/24/first-class-function/) <br>
> [重新認識 JavaScript: Day 18Callback Function 與 IIFE](https://ithelp.ithome.com.tw/articles/10192739)

```plaintext
有任何想法想分享或協助勘誤，歡迎留言交流指教！🏹
```