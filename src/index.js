module.exports = function reverse (n) {
  let array = String(Math.abs(n)).split('');
  return Number (array.reverse().join(''));
}
