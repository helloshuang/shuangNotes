function combinations(groups) {
  return groups.reduce((old, val, index) => {
    const newOld = [];
    if (index < groups.length -1) {
      const arr = old.length ? old : val;
      arr.forEach(m => {
        groups[index+1].forEach(n => {
          newOld.push(m + '' + n);
        });
      });
      return newOld;
    }
    return old;
  }, []);
}
console.log(combinations([[1,2], [3,4,5]]))
