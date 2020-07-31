// 对象上的方法，在调用时，this是指向对象的。函数原型上添加 myCall方法 来模拟call
Function.prototype.myCall = function(obj,...arg){
  obj._fn_ = this;//在obj上添加_fn_属性，值是this(要调用此方法的那个函数对象)。
  obj._fn_(...arg);//在obj上调用函数,那函数的this值就是obj.
  delete obj._fn_;// 再删除obj的_fn_属性,去除影响.
}
