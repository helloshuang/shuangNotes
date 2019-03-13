
let class2type = {}
'Array Date RegExp Object Error'.split(' ').forEach(e => class2type[ '[object ' + e + ']' ] = e.toLowerCase()) 
/**
 * 对象类型判断
 * @param {需要判断类型的对象} obj 
 */
function type(obj) {
    if (obj == null) return String(obj)
    return typeof obj === 'object' ? class2type[ Object.prototype.toString.call(obj) ] || 'object' : typeof obj
}
/**
 * 圣杯继承
 */
var inherit = (function(c,p){
    // 通过一个中间函数实现
	var F = function(){};
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
 
var apple = new fruits;
apple.say();    //My color is red
banana = {
    color: "yellow"
}
apple.say.call(banana);     //My color is yellow
apple.say.apply(banana);    //My color is yellow

/**
 * 冒泡-降序（两两比较，互换位置）
 * @param {*} arr 
 */
function bubleSort1(arr) {
    var len = arr.length;
    for (let outer = len ; outer >= 2; outer--) {
        for(let inner = 0; inner <= outer - 1; inner++) {
            if(arr[inner] < arr[inner + 1]) {
                [arr[inner],arr[inner+1]] = [arr[inner+1],arr[inner]]
            }
        }
    }
    return arr;
}

/**
 * 冒泡-升序
 * @param {*} arr 
 */
function bubleSort2(arr) {
    var len = arr.length;
    for (let outer = 0 ; outer <= len; outer++) {
        for(let inner = 0; inner <= outer - 1; inner++) {
            if(arr[inner] > arr[inner + 1]) {
                [arr[inner],arr[inner+1]] = [arr[inner+1],arr[inner]]
            }
        }
    }
    return arr;
}
/**
 * 选择排序：比较自身和自身之后的元素，最小的和其互换位置
 * @param {*} arr 
 */
function selectSort(arr) {
    var len = arr.length;
    for(let i = 0 ;i < len - 1; i++) {
        for(let j = i ; j<len; j++) {
            if(arr[j] < arr[i]) {
                [arr[i],arr[j]] = [arr[j],arr[i]];
            }
        }
    }
    return arr
}

/**
 * 快速排序：比较自身和自身之后的元素，最小的和其互换位置
 * 选择基准值(base)，原数组长度减一(基准值)，使用 splice
 * 循环原数组，小的放左边(left数组)，大的放右边(right数组);
 * concat(left, base, right)
 * 递归继续排序 left 与 right
 * @param {*} arr
 */
function quickSort(arr) {
  if(arr.length <= 1) {
    return arr;  //递归出口
  }
  var left = [],
    right = [],
    current = arr.splice(0,1);
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < current) {
      left.push(arr[i])  //放在左边
    } else {
      right.push(arr[i]) //放在右边
    }
  }
  return quickSort(left).concat(current,quickSort(right));
}