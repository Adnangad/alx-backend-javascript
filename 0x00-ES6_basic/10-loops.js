export default function  appendToEachArrayValue(array, appendString) {
  let ar = [];
  for (let x of array) {
    let text = "" + appendString;
    text += x;
    ar.push(text);
  };
  return ar;
}
