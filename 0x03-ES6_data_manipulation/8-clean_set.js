export default function hasValuesFromArray(set, str) {
  let finalString = '';
  set.forEach((value) => {
    if (value.startsWith(str) === true) {
      let temp = value;
      temp = temp.replace(/bon/gi, '-');
      finalString += temp;
    }
  });
  finalString = finalString.slice(1);
  return finalString;
}
