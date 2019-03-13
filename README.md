# 面试记录

## 目录
- [CSS相关](#css)
- [JS相关](#js)
- [ES6相关](#es6)。
- [React、RN相关](#react)。
- [一些日常笔记](https://github.com/helloshuang/helloshuang/blob/master/note.js)。

## <span id="css">CSS相关</span>
1. `WEB`标准和`W3C`的理解。
2. 行内元素有哪些，块级元素有哪些，盒模型。
3. 前端页面有哪些部分构成。
4. web语义化，css定位用法。
5. `xhtml`和`html`有哪些区别。
6. `css`有哪些引入方式，`link`和`@import`有什么区别。
7. `rem`布局
8. `css`画三角形、梯形。
9. 定位`fixed`里面套用`absolute`会有什么问题。

## <span id="js">JS相关</span>
1. 怎样判断`Array`数据类型，原型方式。
>Object.prototype.toString.call(obj) // \[Object array\]
2. 数组相关方法。
3. 手写`ajax`过程。
```javascript
var request;
if(window.XMLHttpRequest){
   request=new XMLHttpRequest(); //IE7+,...
}else{
  request=new ActiveXObject("Microsoft.XMLHTTP"); //IE6,IE5
//用XHR发送请求：
//open(method,url,async) //调用XHR对象，async表示同步还是异步，默认为true(异步)；
//send(String)   //发送请求。

request.open("POST","create.php",true);
request.setRequestHeader("Content-type","application/x-www-form-urlencoded");  //必须写在open和send中间
request.send("name=王大锤&sex=男");
```
4. 实现深拷贝。
5. `get`和`post`的区别。
6. 实现跨域的方法。
7. `join()、split()`的区别。
8. `Date`类型格式化成`19:01:01`格式，不足10补0。
9. 手写代码：找出一个字符串或数字中字符出现次数最多的并返回。
10. 手写代码：原生`js`实现`Set`类型的`add、remove、has`方法。
11. webpack相关，优化点。
12. 是否接触过`node`
13. 防抖与节流，手写防抖。
14. 怎样调用`H5`。
15. `js`循环机制。
16. 三级缓存。
17. `Immutable`使用
18. 原型、原型链相关
19. `new`一个对象的过程。


## <span id="js">ES6相关</span>
1. 给变量通过解构方式赋值。
2. `fn.bind(this)/this.fn/内部定义function`三者有什么区别，性能方面有差异吗。
3. `let、const`和`var`的区别，`const`原理。

## <span id="react">React、RN相关</span>
1. `React`生命周期相关。
2. `React、RN`版本，`React`版本15和16有什么区别。
3. `Redux`原理。
4. RN开发中有哪些问题以及解决方案（[解析](https://www.jianshu.com/p/11f38925f5ad)）。
5. `setState`之后发生了哪些操作（[解析](https://www.codercto.com/a/46923.html)）。
6. `diff`算法（[解析](https://www.jianshu.com/p/fa4ca1fed4cf))。
7. `pureComponent`

