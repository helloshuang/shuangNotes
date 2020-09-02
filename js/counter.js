function counter() {
  var count = 0;
  return function() {
    count++;
    return count
  }
}
var count = counter();
count();
