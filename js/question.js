// 函数声明提升，无论条件真假，都是第一个值
console.log(fn)
var flag = true;
if(!flag) {
  function fn() {
    console.log(1111)
  }
} else {
  function fn() {
    console.log(2222)
  }
}
