/**
 * @Author C.S
 * @Time 2019/3/17下午1:58
 * @Email chenshuang@hualala.com
 * @Filename q1
 */

/**
 * @param {string} s
 * @return {number} 最长字符串长度
 */
const lengthOfLongestSubstring = function(s) {
  const length = s.length;
  let strRes = 0;
  for(let i = 0; i < length; i++){
    if(length < strRes) break;
    let str = s[i];
    for(let j = i + 1; j < length; j++){
      if(str.includes(s[j])){
        break;
      }else {
        str += s[j];
      }
    }
    strRes = strRes > str.length ? strRes : str.length
  }
  return strRes;
};