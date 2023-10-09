# JS

### output:

- 使用 **window.alert()** 弹出警告框。
- 使用  **document.write()** 方法将内容写到 HTML 文档中。
- 使用 **innerHTML** 写入到 HTML 元素。
- 使用 **console.log()** 写入到浏览器的控制台。



### literals:

similar as cpp or python...

**对象（Object）字面量** 定义一个对象：

{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

**函数（Function）字面量** 定义一个函数：

function myFunction(a, b) { return a * b;}



### variables:

JavaScript 使用关键字 **var** 来定义变量

```js
var x, length

x = 5

length = 6 
```

comments: same as cpp

type: maybe similar as python? automatically determine



**getElementById**: search something with its id

**innerHTML**: 把一个字符串放进那个东西的文字部分

document.getElementById("demo").innerHTML = "你好 Dolly";



### js let & const:

let: **only valid in the code block**

(note: var variables can **be visited outside the block**)

在 ES6 之前，是没有块级作用域的概念的，只有两种作用域： **全局变量** 与 **函数内的局部变量**。

ES6 可以使用 let 关键字来实现块级作用域。

let 声明的变量只在 let 命令所在的代码块 **{}** 内有效，在 **{}** 之外不能访问。

```js
{
    var a = 1;
    let b = 3;
}
//we can use a outside the block but not b
```



### 遍历

1.普通for

```js
for(j = 0; j < arr.length; j++) {
   //do sth
} 
```

2.forEach

```js
arr.forEach(function(e){  
   //do sth
});
```

3.in，跟python里类似

```js
for(j in arr) {
   //do sth
}

```

4.map函数，经常用到

```js
arr.map(function(n){  
   //do sth
});
```

