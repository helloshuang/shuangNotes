/**
 * JSON.parse(JSON.stringify(obj))
 * 如果obj里面有时间对象，则JSON.stringify后再JSON.parse的结果，时间将只是字符串的形式。而不是时间对象；
 * 如果obj里有RegExp、Error对象，则序列化的结果将只得到空对象；
 * 如果obj里有函数，undefined，则序列化的结果会把函数或 undefined丢失；
 * 如果obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null
 * JSON.stringify()只能序列化对象的可枚举的自有属性，例如 如果obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor；
 * 如果对象中存在循环引用的情况也无法正确实现深拷贝；
 */

/**
 * Object.assign
 * Object.assign不是简单的深拷贝。查阅官方文档发现它Object.assign只对顶层属性做了赋值，完全没有继续做递归之类的把所有下一层的属性做深拷贝。
 */

function isType(obj,type){//判断包装类型的原型
  return Object.prototype.toString.call(obj).indexOf(type) !== -1;
}

/**
 * 多类型判断的深拷贝
 * @param obj
 * @returns {Object|[]|{}|RegExp|Date|*}
 */
function deepClone(obj) {
  if (typeof obj !== 'object') return obj;

  if(isType(obj,'String')||isType(obj,'Number')||isType(obj,'Boolean'))
    return obj.valueOf();
  if(isType(obj,'Date'))
    return new Date(obj);
  if(isType(obj,'RegExp')){
    return new RegExp(obj);
  }
  const result = Array.isArray(obj) ? [] : {};
  for (let i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      if (typeof obj[i] === 'object') {
        result[i] = deepClone(obj[i]);
      } if (typeof obj[i] === 'function') {
        result[i] = obj[i].bind(result);
      } else {
        result[i] = obj[i];
      }
    }
  }
  return result;
}
