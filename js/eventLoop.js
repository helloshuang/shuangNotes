// 探探
setTimeout(() => {
  console.log(1);
  new Promise((resolve) => {
    console.log(2)
    setTimeout(() => {
      console.log(3)
      resolve()
      new Promise(resolve => {
        console.log(4);
        resolve()
      })
    })
  })
})
console.log(5)
new Promise(resolve => {
  console.log(6)
  resolve();
}) 
// 5 6 1 2 3 4
