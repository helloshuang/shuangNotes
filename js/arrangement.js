// 字节
function arrangement(arr, n) {
  const res = [];
  (function arrangement(resItem, arr, n) {
    if (resItem.length >= n) {
      res.push(resItem);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (resItem.includes(arr[i])) {
        continue;
      }
      arrangement(resItem + arr[i], arr, n);
    }
  }('', arr, n));
  return res;
}
