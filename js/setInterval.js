/**
 * 模拟 setInterval() ：将 setTimeout() 包含在一个执行函数A中，
 * 而setTimeout() 自己的code执行函数又是A，然后在函数A外将函数A执行一次，即达到了循环执行的目的。
 */
function likeInterval() {
  let intervalNum = 0;
  function testsetInterval() {
    let date = new Date();
    console.log(date.getSeconds());
    console.log("setInterval", intervalNum++);
  }
  function recursive() {
    testsetInterval();
    setTimeout(function () {
      recursive()      //递归，每隔4秒调用一次recursive()
    }, 4000)
  }
  function testFuntion() {
    recursive();        //在方法recursive外，调用一次recursive,以启动循环调用！

  }
}
