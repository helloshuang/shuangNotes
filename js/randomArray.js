// 字节
function randomArray(arr) {
  return [...arr].sort(() => {
    return Math.random() > 0.5 ? 1 : -1;
  })
}
var array = ['a', 2, '33', 'de'];
console.log(randomArray(array), array);
