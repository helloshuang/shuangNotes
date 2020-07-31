
/**
 * 模拟 setTimeout() ：用 setInterval() 模拟 setTimeout() 很简单，
 * 在 setInterval() 执行一次后，立刻关闭窗口(当然这是耍无赖)或者执行 clearInterval() 方法(这个靠谱点)
 */
function likeTimeout() {
  let intervalNum = 0, clearId = 0;
  function testsetInterval(){
    let date = new Date();
    console.log(date.getSeconds());
    console.log("setInterval", intervalNum++);
    clearInterval(clearId);     //也可以在此执行
  }
  function testFuntion() {
    clearId = setInterval(function () {
      testsetInterval();          //每隔4秒调用testsetInterval()
      // clearInterval(clearId);     //可以在此执行
    },4000);
  }
}
