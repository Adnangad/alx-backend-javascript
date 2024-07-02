export default function hasValuesFromArray(set, str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  let finalString = [];
  set.forEach((value) => {
    if (value.startsWith(str) === true) {
      finalString.push(value.slice(str.length);
    }
  });
  return finalString.join('-');
}
