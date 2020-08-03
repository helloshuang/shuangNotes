1. 当函数和变量同名时，函数声明提升优于变量声明提升，当变量未赋值，值为函数体
2. this谁调用指向谁，无人调用指向window
3. 构造函数new创建实例的时候，this指向实例
4. es6简写的函数声明，不能通过new实例化 a: { b(){ } }
5. 构造函数的属性如果直接复制，new的时候没传值就会是undefined，不会去原型链上找
6. 暂时性死区：
7. function的prototype，通过new进行实例化才会往原型链上找
```js
function fn() {
  console.log(this.length)
}
var s = {
  length: 5,
  show: function (f) {
   arguments[0]() // this指向argument
  }
}
s.show(fn)
```
