
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
