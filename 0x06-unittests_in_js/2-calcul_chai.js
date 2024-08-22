function calculateNumber (type, a, b) {
  if (type === 'SUM') {
    const rez = Math.round(a) + Math.round(b);
    return rez;
  }
  if (type === 'SUBTRACT') {
    const rez = Math.round(a) - Math.round(b);
    return rez;
  }
  if (type === 'DIVIDE') {
    if (Math.round(b) === 0) {
      return 'Error';
    }
    const rez = Math.round(a) / Math.round(b);
    return rez;
  }
}
module.exports = calculateNumber;