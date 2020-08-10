// 字节
//function upStair(num) {
//    if (num < 3) return num;
//    return upStair(num - 1) + upStair(num - 2);
//}
function upStair(num) {
  const list = new Array(num + 1).fill(0);
  list[1] = 1;
  list[2] = 2;
  for (let i = 3; i < list.length; i++) {
    list[i] = list[i - 1] + list[i - 2]
  }
  return list[num];
}
console.log(upStair(10))
