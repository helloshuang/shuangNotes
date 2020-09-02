Promise.prototype.all = function (promises) {
  let results = new Array(promises.length);
  let promiseCount = 0;
  return new Promise(function (resolve, reject) {
    promises.forEach((val, i) => {
      Promise.resolve(val).then(function (res) {
        promiseCount++;
        results[i] = res;
        if (promises.length === promiseCount) {
          return resolve(results);
        }
      }, function (err) {
        return reject(err);
      })
    })
  })
}
