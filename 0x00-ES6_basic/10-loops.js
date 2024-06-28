export default function appendToEachArrayValue(array, appendString) {
  const ar = [];
  for (const x of array) {
    let text = `${appendString}`;
    text += x;
    ar.push(text);
  }
  return ar;
}
