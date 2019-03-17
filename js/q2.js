/**
 * @Author C.S
 * @Time 2019/3/17下午2:03
 * @Email chenshuang@hualala.com
 * @Filename q2
 */
/**
 * sort 升序排序
 * @param arr
 * @returns {*}
 */
function sortUp(arr) {
  arr.sort(function (a, b) {
    return  a - b
  })
  return arr
}
/**
 * 冒泡-降序（两两比较，互换位置）
 * @param {*} arr
 */
function bubleSort1(arr) {
  let len = arr.length;
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
  let len = arr.length;
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
  let len = arr.length;
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
  let left = [],
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