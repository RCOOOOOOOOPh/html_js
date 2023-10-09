# React

react组件必须使用Pascal命名法（首字母要大写）😅



需要安装的东西：

node.js，尽量新的版本，16点多

npm，用来下载nodejs包的，有点像pip

查看npm版本：npm -v

更新npm：Linux：sudo npm install npm -g

Windows：npm install npm -g

npm更新的时候可能会报错，-4048什么的，说是系统阻止这么干

解决方法：**nodejs卸载了重装就行**。。。搜索一下有个uninstall node的程序

清除缓存、管理员模式打开cmd什么的都没用

重启/重装解决一切问题

安装完新版node和npm后又遇到点问题：

npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.

不更新tar的话，create-react-app没法运行

安装个新版tar就好：

**npm i tar**

然后又遇到问题，在创建项目的时候，'create-react-app' 不是内部或外部命令，也不是可运行的程序或批处理文件。

npm config list找到prefix，那个就是放全局包的地方（应该就是安装的时候写了-g的那种？）

然后这个路径可以改，在一个.npsrc的文件里面

把这个路径加入环境变量path里，就好了

我现在的是



安装东西：

npm install 包名称

JS

class Tweet

{

​	state = {};

​	render()

​	{

​		blabla

​	}

}

Angular, Vue: framework

React: library

### install: 

```shell
npm install -g create-react-app
```

### create: 

create-react-app

```
(cd work_directory)
create-react-app <app_name>
cd <app_name>
```

with yarn:

```
yarn create react-app <app_name>
cd <app_name>

```

start :

```
npm start
//or
yarn start
```

render: return a markup

e.g.default code

![image-20220218125615432](C:\Users\think\AppData\Roaming\Typora\typora-user-images\image-20220218125615432.png)

babel: online js compiler

babeljs.io

compile react: babeljs.io/repl



### IIYO, KOIYO

delete the files in src folder, and:

![image-20220218130904404](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218130904404.png)

react app:

![image-20220218130923755](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218130923755.png)

![image-20220218131038149](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218131038149.png)

![image-20220218131058712](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218131058712.png)

### build a shopping cart website:

install bootstrap:

```shell
npm i bootstrap@4.1.1
```

then

```javascript
import 'bootstrap/dist/css/bootstrap.css';
```

<img src="C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218132916773.png" alt="image-20220218132916773" style="zoom: 50%;" />

<img src="C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218133130071.png" alt="image-20220218133130071" style="zoom: 67%;" />

**imrc: shortcut for import React, { Component } from 'react';**

**cc:create class**

<img src="C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218133218394.png" alt="image-20220218133218394"  />

add class name Counter, delete state, and export default Counter;

![image-20220218133616034](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218133616034.png)

we can also directly export class:

![image-20220218134712077](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218134712077.png)

![image-20220218134731111](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218134731111.png)

wrap text and button: two methods

![image-20220218135430681](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218135430681.png)

add state:

![image-20220218140005915](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218140005915.png)

or write a function:

![image-20220218140042504](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218140042504.png)

we can return h1:

![image-20220218140213108](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218140213108.png)

add button, style

![image-20220218141324591](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218141324591.png)

![image-20220218141343244](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218141343244.png)

edit it inline:

![image-20220218141452897](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218141452897.png)

edit classes, if count == 0 yellow, else blue

encapsulate the two lines: Refractor(ctrl+shift+R)

![image-20220218151831871](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218151831871.png)

automatically generate:

```react
newMethod() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
}
```

![image-20220218152428605](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218152428605.png)



### Render a list of items

jsx doesn't have loop(angular has)

create a list: use map to map a string to a list

```react
<ul>{this.state.tags.map(tag => <li>{tag+"114514"}</li>)}</ul>
```

![image-20220218153359534](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218153359534.png)

### conditional rendering

jsx doesn't have if else

use js, if the tag list is empty, the website shows "there are no tags", else shows the tags

```react
renderTags()
{
    if (this.state.tags.length == 0) return <p>there are no tags</p>;
    return <ul>{this.state.tags.map(tag => <li>{tag+"114514"}</li>)}</ul>;
}
```

**js &&:**

true && "a string"

print "a string"

true && "a string" && 1

print 1

a non-empty string is considered true, and if the whole sentence is true, js prints the last one

if the tags list is none, indicate people to add tags:

`{this.state.tags.length === 0 && "please create a new tag"}`

### handle events

**an edit trick**: when editing <blabla> and </blabla> in pair, choose the blabla and ctrl+D, we can edit the pair on a single time

react onclick: **no brackets**, and the **C** is upper case

js:

![image-20220218160657985](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218160657985.png)

react:

![image-20220218160724897](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218160724897.png)

the functions we wrote cannot use **this**:

```js
handleIncrement()
{
    console.log("114514", this.state);
}
```

![image-20220218160937984](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218160937984.png)

if `console.log("114514", this);`:

![image-20220218161014265](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218161014265.png)

**bind** the method to constructor

```react
constructor()
{
    super();
    this.handleIncrement.bind(this);
}
```

"this" is always referencing the current object

(why should we use this "constructor"?)

then we can **reset** the handleIncrement function (replace the original handleIncrement with the binded function):

```react
constructor()
{
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
}

handleIncrement()
{
    console.log("114514", this.state.count);
}
```

now we can use sth in "this":

![image-20220218161854673](C:\Users\think\AppData\Roaming\Typora\typora-user-images/image-20220218161854673.png)

or using an arrow function:

```react
handleIncrement=()=>
{
    //this.state.count += 1;
    console.log("114514", this.state.count);
}
```

### setState:

react cannot automatically renew the states

we should write this.setState() to renew it

```react
handleIncrement=()=>
{
    this.state.count += 1;
    this.setState();
    console.log(this.state.count);
}
```

and the console shows 1,2,3,4......

if we write this:

```react
handleIncrement=()=>
{
    this.setState({count: this.state.count + 1});
}
```

we can add 1 to this.state.count and set the added number to this.state.count

### Passing Event Arguments

we cannot pass some parameters to the handleIncrement function because we can only put function name in the onClick, but not function(parameters):

```react
<button
    onClick={this.doHandleIncrement}
    className="btn btn-secondary btn-sm">
    Increment
</button>
```

so we write this function:

```react
doHandleIncrement=()=>
{
    this.handleIncrement({id:1});
    //deliver parameters to handleIncrement
}
```

and:

```react
handleIncrement=(product)=>
{
    console.log(product)
    this.setState({count: this.state.count + 1});
}
```

or inline function:

```react
onClick={()=>this.handleIncrement(parameters)}
```



# JSX

tree components

e.g. "counters" consist of several "counter"s

create a file "counters.jsx" under components:

like "counter", imrc, cc+tab

```react
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {  } 
    render() { 
        return (
        <div>
            <Counter />
            <Counter />
            <Counter />
        </div>
        );
    }
}
export default Counters;
```

and in index.js:

```js
import Counters from './components/counters'

ReactDOM.render(<Counters/>, document.getElementById("root"));
```

<img src="C:\Users\think\AppData\Roaming\Typora\typora-user-images\image-20220219182447502.png" alt="image-20220219182447502" style="zoom:67%;" />

set state in Counters:

```react
state = {
        counters:[
            {id:1, value:1},
            {id:2, value:2},
            {id:3, value:0},
            {id:4, value:0}
        ]
      } 
```

initialize the counters: use props

(what is props??????)

use map instead of writing counter for four times

```react
<div>
    {this.state.counters.map(counter=><Counter 
                                          key={counter.id} 
                                          value={counter.value} 
                                          selected={true}
                                          />)}
</div>
```

if we write `console.log('props', this.props)` in counter.jsx, we can get:

![image-20220219184030375](C:\Users\think\AppData\Roaming\Typora\typora-user-images\image-20220219184030375.png)

so we can use props.value to initialize count: `state = {count:this.props.value};`

<img src="C:\Users\think\AppData\Roaming\Typora\typora-user-images\image-20220219184152726.png" alt="image-20220219184152726" style="zoom:50%;" />

### Children

if we write sth in Counters, like h4:

```react
<div>
    {this.state.counters.map(counter=>(
        <Counter key={counter.id} value={counter.value}>
            <h4>iiyo, koiyo</h4>
        </Counter>
    ))}
</div>
```

and in Counter render():`console.log('props', this.props)`

<img src="C:\Users\think\AppData\Roaming\Typora\typora-user-images\image-20220219190113245.png" alt="image-20220219190113245" style="zoom:67%;" />

this h4 is the children of Counter

we can use props.children to change the title of each counter:

<img src="C:\Users\think\AppData\Roaming\Typora\typora-user-images\image-20220219190201655.png" alt="image-20220219190201655" style="zoom: 67%;" />

<img src="C:\Users\think\AppData\Roaming\Typora\typora-user-images\image-20220219190323228.png" alt="image-20220219190323228" style="zoom:50%;" />

and we can change the title dynamically

```react
<h4>Counter{counter.id}</h4>
```

<img src="C:\Users\think\AppData\Roaming\Typora\typora-user-images\image-20220219192700913.png" alt="image-20220219192700913" style="zoom:50%;" />

注：

![image-20220219190436180](C:\Users\think\AppData\Roaming\Typora\typora-user-images\image-20220219190436180.png)

这段的意思应该是（用类似python的伪代码写了一下）：

answer = []

for counter in this.state.counters:

​	answer += Counter(key=xxx, props={value:xxx, children:那个h4})

return answer

或者更确切的应该是：

[Counter(counter.blabla) for counter in counters]

js的map应该跟python的[func(i) for i in sth_iterable]差不多

filter跟[i for in sth_iterable if func(i)]





**states** are **private**, internal, local

**props** are **public**, **read only**



### Counter handle the states in Counters:

we should use props to transfer a function of Counters class

![image-20220220020354796](C:\Users\think\AppData\Roaming\Typora\typora-user-images\image-20220220020354796.png)

so we can use this.props.onDelete in counter.jsx:

![image-20220220020441970](C:\Users\think\AppData\Roaming\Typora\typora-user-images\image-20220220020441970.png)

then we click the Delete button:

<img src="C:\Users\think\AppData\Roaming\Typora\typora-user-images\image-20220220020521375.png" alt="image-20220220020521375" style="zoom:67%;" />

### updating the state

we can adopt a parameter to the function handleDelete() and use it to update the 

state of Counters:

```react
handleDelete=(counterID)=>
{
    console.log("handleDelete, counterID is ", counterID)
    const counters = this.state.counters.filter(c=>c.id !== counterID)
    //上面那个应该是把id不等于counterID的滤掉了
    //类python伪代码[c for c in this.state.counters if c.id != counterID]
    //点击第二个delete按钮的时候，传进来的counterID=2
    //所以新的counters只有id为1,3,4的三个,把旧的counters替换掉
    this.setState({counters});
};
```

![image-20220220022159776](C:\Users\think\AppData\Roaming\Typora\typora-user-images\image-20220220022159776.png)

怎么从父传给子，子传给父的。。。乱七八糟

we may write new things of each Counter, and rewrite the props is not easy, like sth below:

```react
state = {
    counters:[
        {id:1, value:1, sth: 114514},
        {id......}
}; 

render() { 
    return (
        <div>
            {this.state.counters.map(counter=>(
                <Counter 
                    key={counter.id} 
                    onDelete={this.handleDelete} 
                    value={counter.value}
                    id={counter.id}
                    sth={counter:sth}>
                    <h4>Counter{counter.id}</h4>
                </Counter>
            ))}
        </div>
    );
}
```

so we can give the whole counter: counter={counter}

```react
{this.state.counters.map(counter=>(
    <Counter 
        key={counter.id} 
        onDelete={this.handleDelete} 
        counter={counter}>
        <h4>Counter{counter.id}</h4>
    </Counter>
))}
```

and **change** the "this.props.id" to "this.props.counter.id"

note: be careful to find all the "this.props.blabla" and change it!!!!!

![image-20220220023439574](C:\Users\think\AppData\Roaming\Typora\typora-user-images\image-20220220023439574.png)



### **Removing Local State**

controlled component

remove the state in counter.jsx and use this.props.counter.sth



### **multiple components and lift up**

(I saved the code at this time)

copy the functions of counters.jsx to app.js, and use props to visit the functions

so the states of counters can be used by navbar

### stateless functional component

for simple **stateless** components

```react
const NavBar=(props)=>
{
    return (
        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                Navbar 
                <span className="badge badge-pill badge-secondary">
                    {props.totalCounters}
                </span>
            </a>
        </div>
        </nav>
    );
}
```

or use ({totalCounters}) and only give totalCounters from props:

```react
const NavBar=({totalCounters})=>
{
    return (
        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                Navbar 
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </div>
        </nav>
    );
}
```

use props as parameter to give properties to the function

e.g. 

```react
<NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
```

**Destructuring**

(not destruct)

```react
const {onReset, onIncrement, onDelete, counters} = this.props; 
```

use this to avoid writing many this.props

e.g. change `this.props.counter.id` to `counter.id`



**Lifecycle Hooks**

Mount: constructor, render, componentDidMount

Update: render, componentDidUpdate

Unmount: componentWillUnmount

only in components, not stateless functional component

![image-20220220182544360](C:\Users\think\AppData\Roaming\Typora\typora-user-images\image-20220220182544360.png)



**use className instead of class in jsx!!!!!!**

![image-20220220182121433](C:\Users\think\AppData\Roaming\Typora\typora-user-images\image-20220220182121433.png)



### React项目的打包部署

坑死我了，为什么这么重要的东西，教程这么难找........

https://www.jianshu.com/p/b348926fa628

# create-react-app是个开发工具，类似IDE，不是react本身！！！！！

据说是因为html在服务器端和本地打开会有些不一样，所以为了在开发过程中尽量贴合服务器，create-react-app自己**会用nodejs创建一个服务器**，在上面运行react网页（默认是localhost:3000)，然后前后端调试的时候是**跨端口调试**；

最终生成一个项目的时候，要**编译打包**到flask目录底下，然后用flask里的render_template()功能把这个html给render过去

编译后的文件目录应该是这样的：

```css
myprograms
├──frontend
│   ├── package.json
|   └── ...
└──backend
    ├── backend.py
    ├── static
    │   └── build
    │       ├── asset-manifest.json
    │       ├── favicon.ico
    │       ├── manifest.json
    │       ├── service-worker.js
    │       └── static
    │           ├── css
    │           │   ├── main.c17080f1.css
    │           │   └── main.c17080f1.css.map
    │           ├── js
    │           │   ├── main.040641a3.js
    │           │   └── main.040641a3.js.map
    │           └── media
    │               ├── 1.0ebbf763.jpg
    │               └── logo.5d5d9eef.svg
    └── templates
        └── index.html
```

编辑package.json,在script中加入钩子

```json
"prebuild":"rm -rf ../backend/templates/index.html && rm -rf ../backend/static/build",
"postbuild": "mv build/index.html ../backend/templates/ &&  mv build ../backend/static/", 
```

再在json（整体，不是script）中加入：

```bash
 "homepage": "/backend/static/build"
```

然后运行npm run build，即可编译，编译好的代码被放进flask项目下

然后flask中app的static_url_path要设置为"/backend/static"（注意不是"/static"或者""）



### React Router

用来共享部分UI，比如菜单和侧边栏都是共用的，主界面要显示不同的内容，这样通过不同的路径就可以访问

安装：npm add 

BrowserRouter:在整个程序的最外边

即：

```jsx
reactDOM.render(
	<BrowserRouter>
    	<App />
    </BrowserRouter>,
    document.getElementById("root");
)
```

而不能

```jsx
reactDOM.render(
    <SomeComponent />
	<BrowserRouter>
    	<App />
    </BrowserRouter>,
    document.getElementById("root");
)
```

Link: 通向某个路由的链接

```jsx
<Link to="/path">name</Link>
```

Routes: 有点像有些语言的switch（而且旧版router里<Route />就是<Switch />）

```jsx
<Routes>
    <Route path="/" element={<App />} />
    <Route path="/component1" element={<Component1 />} />
    <Route path="/component2" element={<Component2 />} />
</Routes>
```

