const a = [
  ['0', '1'], // 10号9点-12点
  ['2', '3', '4']// 10号13点-16点
];

const b = [
  ['0', '1'],// 11号9点-12点
  ['2', '3', '4'],// 11号13点-16点
];
/**
 * 组合数据
 * @param groups
 * @returns {*}
 */
const combinationData = (groups) => {
  return groups.reduce((old, val, index) => {
    const newOld = [];
    if (index < groups.length -1) {
      const arr = old.length ? old : val;
      arr.forEach(m => {
        groups[index+1].forEach(n => {
          newOld.push(m + n);
        });
      });
      return newOld;
    }
    return old;
  }, []);
}

console.log('a:', combinationData(a)); //["02", "03", "04", "12", "13", "14"]
console.log('b:', combinationData(b)); //["025", "026", "035", "036", "045", "046", "125", "126", "135", "136", "145", "146"]
