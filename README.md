# 记

## 目录
- [CSS相关](#css)
- [JS相关](#js)
- [ES6相关](#es6)。
- [React、RN相关](#react)。
- [算法相关](#math)。
- [一些日常笔记](https://github.com/helloshuang/helloshuang/blob/master/js/objectType.js)。

## <span id="css">CSS相关</span>
1. `WEB`标准和`W3C`的理解。
> WEB标准简单来说可以分为结构、样式和行为，将这三部分独立分开，更具有模块化，但一般行为产生时，就会有结构或者表现的变化，使界限不清晰
> W3C标准提出了规范化的要求：
> 结构要求：标签小写、闭合、不允许随意嵌套
> css和js要求：尽量使用外链、id class做好见文知义、代码维护简单，便于改版
2. 前端页面有哪些部分构成。
> 结构层：HTML，负责描绘出内容的结构
> 表示层（样式层）：CSS，负责如何显示有关内容 
> 行为层：JS，负责内容应如何对事件做出反应
3. [行内元素有哪些，块级元素有哪些](./html/HTML.html)，盒模型。
> margin => border => padding => content   
> 普通 盒模型：width/height: content  
> 盒子大小 = content + padding + border + margin  
> 怪异盒模型：width/height: content + padding + border    
> 盒子大小 = width(content + padding + border) + margin
4. web语义化，css定位用法。
5. `xhtml`和`html`有哪些区别。
6. `css`有哪些引入方式，`link`和`@import`有什么区别。
> 从属关系：link是html标签，不仅可以加载css文件，@import是css的语法，只能导入样式表，写在style标签中  
> 加载顺序：link和html同时加载，@import在页面加载完毕后加载  
> 兼容性：@import是css2.1才有，兼容IE5+，link无兼容性问题
> DOM：javascript只能控制dom改变link标签引入的样式，@import的样式不能由dom控制
7. 响应式布局的解决方案`rem`、百分比布局等有什么区别[参考](https://www.jianshu.com/p/ba26509bc5b3)
> px和视口
> css像素为web开发者提供，在css中使用的一个抽象单位
> 物理像素与设备的硬件密度有关
> 视口：
> 媒体查询
> 百分比
> rem
> vw/vh
8. `css`画三角形、梯形。
9. 定位`fixed`里面套用`absolute`会有什么问题。
> 元素会相对fixed元素定位，所以也固定在屏幕的固定位置
> 注意不要flex与fixed/absolute一起使用，可能会发生布局错位的问题
> 为解决问题可以外层套一层元素使用定位，内部flex
10. `position: sticky`使用。
11. 常用的布局，[双栏布局](./html/TwoolumnLayout.html)，左侧固定宽度，右侧自适应，三栏等分布局
12. flex：1占满剩余空间原理，父元素子元素常用属性([解析](https://www.cnblogs.com/nuannuan7362/p/5823381.html))

## <span id="js">JS相关</span>
1. 怎样判断`Array`数据类型，原型方式。
>Object.prototype.toString.call(obj) // \[Object array\]
2. [对象类型判断](./js/objectType.js)
2. 数组相关方法。
3. [手写`ajax`过程](./js/ajax.js)
4. [实现深拷贝](./js/deepClone.js)
5. `get`和`post`的区别。
6. 实现跨域的方法。
7. `join()、split()`的区别。
8. `Date`类型格式化成`19:01:01`格式，不足10补0。
9. 手写代码：找出一个字符串或数字中字符出现次数最多的并返回。
10. 手写代码：原生`js`实现`Set`类型的`add、remove、has`方法。
11. webpack相关，优化点，单页应用还是多页应用，打包时有什么区别。([解析](https://segmentfault.com/a/1190000006178770#articleHeader4))（[优化](https://www.jianshu.com/p/3dfae39b68dd)）
12. 是否接触过`node`
13. [防抖与节流](./js/throttle-and-debounce.js)
14. 怎样调用`H5`。
15. `js`循环机制。（[解析](https://www.cnblogs.com/yqx0605xi/p/9267827.html)）
16. 浏览器缓存机制，强缓存和协商缓存。([解析](https://juejin.im/post/6844903838768431118))
17. `Immutable`使用
18. 原型、原型链相关
19. `new`一个对象的过程。
20. 构造函数和普通函数的区别
21. this指向，es6箭头函数和普通函数bind(this)的区别
22. [call apply](./js/call-apply.js) [`js`原生实现`bind`](./js/bind.js)
23. 继承有哪些？优缺点各是什么？（[解析](https://www.cnblogs.com/humin/p/4556820.html)）
24. es6转成es5用什么，除了babel之外
25. `instanceof` 和 `typeof` 的实现原理
26. 闭包，什么场景要用闭包，解决了什么问题（[解析1](https://www.cnblogs.com/langqq/p/9566565.html)，[解析2](https://blog.csdn.net/qq_21132509/article/details/80694517))
27. 图片预加载和懒加载的实现原理，怎么请求图片资源
28. 浏览器重排和重绘 [相关](https://juejin.im/entry/6844903453966204936)
> 渲染过程：浏览器解析HTML代码生成DOM树，解析CSS代码，然后创建一个渲染树（DOM中可见的部分）
> 重排（回流）reflow：渲染树 需要重新分析并且节点尺寸需要重新计算，尺寸结构发生改变时触发
> 重绘repaint：节点的几何属性发生改变，或者样式发生改变，不影响布局，屏幕上的任何地方需要更新，例如改变背景色
> 回流必定重绘，重绘不一定回流，重绘代价比较小
29. ts的好处
30. [柯理化](./js/currying.js)
> 传递给函数一部分参数来调用它，再返回一个函数处理剩下的参数，参数的缓存

## <span id="js">ES6相关</span>
1. 给变量通过解构方式赋值。
2. `fn.bind(this)、箭头函数、内部定义function`三者有什么区别，性能方面有差异吗。
3. `let、const`和`var`的区别，`const`原理。
4. 使用`Promise，fetch`，超时处理，`fetch`的参数和返回值（[解析](https://www.cnblogs.com/whybxy/p/7645578.html)）

## <span id="react">React、RN相关</span>
1. `React`生命周期相关。
2. `React、RN`版本，`React`版本15和16有什么区别。
3. `Redux`原理。([文档](https://www.redux.org.cn/docs/basics/Actions.html))
4. RN开发中有哪些问题以及解决方案（[解析](https://www.jianshu.com/p/11f38925f5ad)）。
5. `setState`之后发生了哪些操作（[解析](https://www.codercto.com/a/46923.html)）。
6. `diff`算法（[解析](https://www.jianshu.com/p/fa4ca1fed4cf))。
7. `pureComponent`用法（[解析](https://www.jianshu.com/p/33cda0dc316a)）
8. `Redux`中`connect`的参数[例子](./js/connect.js)。
> React-Redux 提供connect方法，用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来
> const list = connect( mapStateToProps, mapDispatchToProps )(TodoList)
> mapStateToProps：作为函数，mapStateToProps执行后应该返回一个对象，里面的每一个键值对就是一个映射,每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染
> 第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
> mapDispatchToProps: 定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。
> 如果是一个函数，会得到dispatch和ownProps（容器组件的props对象）两个参数。
> 如果是一个对象，它的每个键名也是对应 UI 组件的同名参数，键值应该是一个函数，会被当作 Action creator
9. 父组件向多层子组件传递参数，不用`redux`，`context`的用法，`provider`
> context，通过组件树提供的传递数据的方法
> const {Provider, Consumer} = React.createContext(defaultValue); // defaultValue可以设置共享的默认数据
> Provider(生产者): 用于生产共享数据的地方
> <Provider value={/*共享的数据*/}>
>     /*里面可以渲染对应的内容*/
> </Provider>
> Consumer(消费者): 用于消费Provider产生的数据
> <Consumer>
>   {value => /*根据上下文  进行渲染相应内容*/}
> </Consumer>
10. `react key`是干嘛的
11. `react-router history`和`location`
12. `FlatList`长列表性能优化
13. `react`创建组件的3种方法，什么是无状态组件和`PureComponent`,什么是受控组件和非受控组件，无状态组件和有状态组件的区别
14. `setState`是同步还是异步？`setState`事务机制？
15. `react`合成事件和原生事件
16. `redux` 用过哪些中间件处理异步`action`?
17. `redux`的`store`改变后，如何触发组件`rerender，connect`内部做了什么
18. `RN`中怎么处理图片
19. `ref`的用法
20. `react`、`react-dom`、`react-native`之间的关系，`react-native`做了什么，怎么和`native`交互 [相关文章](http://blog.poetries.top/2019/10/02/rn-yuanli/)
21. `React`优化，防止组件无用更新，`shouldUpdate`里`state`的值是对象怎么判定更新
22. `React`组件复用方法的方式
> Render Props、
> [高阶组件](./js/HighOrderComponent.js)、
> [react hooks](https://segmentfault.com/a/1190000019223106) (16.8)，在不便携class的情况下使用state及其他React属性

## <span id="math">算法相关</span>
1. [字符串中最长无重复子串](https://github.com/helloshuang/helloshuang/blob/master/js/q1.js)
2. [数组排序](https://github.com/helloshuang/helloshuang/blob/master/js/q2.js)
3. 二分法
4. 实现一个队列类
5. 实现Array.prototype.filter函数
6. 实现Function.prototype.bind函数
7. [模拟`setInterVal`](./js/setInterval.js)
8. [模拟`setTimeOut`](./js/setTimeout.js)
