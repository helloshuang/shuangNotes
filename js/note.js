
let class2type = {}
'Array Date RegExp Object Error'.split(' ').forEach(e => class2type[ '[object ' + e + ']' ] = e.toLowerCase()) 
/**
 * 对象类型判断
 * @param {object} obj 需要判断类型的对象
 */
function type(obj) {
    if (obj == null) return String(obj)
    return typeof obj === 'object' ? class2type[ Object.prototype.toString.call(obj) ] || 'object' : typeof obj
}
/**
 * 圣杯继承
 */
let inherit = (function(c,p){
    // 通过一个中间函数实现
	let F = function(){};
	return function(c,p){
		F.prototype = p.prototype;
		c.prototype = new F();
		c.uber = p.prototype;
		c.prototype.constructor = c;
	}
})();
/**
 * call / apply
 * func.call(this, arg1, arg2);
 * func.apply(this, [arg1, arg2])
 */
function fruits() {}
fruits.prototype = {
    color: "red",
    say: function() {
        console.log("My color is " + this.color);
    }
}
 
let apple = new fruits;
apple.say();    //My color is red
banana = {
    color: "yellow"
}
apple.say.call(banana);     //My color is yellow
apple.say.apply(banana);    //My color is yellow

/**
 * 模拟 setInterval() ：将 setTimeout() 包含在一个执行函数A中，而setTimeout() 自己的code执行函数又是A，然后在函数A外将函数A执行一次，即达到了循环执行的目的。
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

/**
 * 模拟 setTimeout() ：用 setInterval() 模拟 setTimeout() 很简单，在 setInterval() 执行一次后，立刻关闭窗口(当然这是耍无赖)或者执行 clearInterval() 方法(这个靠谱点)
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

try {
  console.log(1);
  setTimeout (() => {
    console.log(2);
  }, 100);
  setTimeout(() => {
    console.log(3)
    throw new Error(5);
  });
  console.log(4);
} catch (e) {
  console.log(e);
}