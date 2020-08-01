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
