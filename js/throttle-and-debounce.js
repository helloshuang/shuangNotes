/**
 * 节流：高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率。
 * @param func
 * @param wait
 * @returns {function(...[*]=)}
 */
function throttle(func, wait) {
  let flag = true;
  return () => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      flag = true;
      func();
    }, wait);
  };
}

/**
 * 防抖：触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间。
 * @param func
 * @param wait
 * @returns {function(...[*]=)}
 */
function debounce(func, wait) {
  let timer = null;
  return () => {
    timer && clearTimeout(timer);
    timer = setTimeout(func, wait);
  };
}
