function solution(str) {
  let flag = true;
  const list = [['(', ')'],['{', '}'],['[',']']];
  const str2Arr = str.split();
  list.forEach((le) => {
    const leftNum = str2Arr.filter(s => s === le[0]);
    const rightNum = str2Arr.filter(s => s === le[1]);
    flag = leftNum === rightNum;
  })
  str2Arr.forEach((letter) => {
    const list = []
    if (letter === '(') {

    }
  })
  return flag;
}
