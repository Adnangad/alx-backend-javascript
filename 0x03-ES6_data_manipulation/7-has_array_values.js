export default function hasValuesFromArray(set, arr) {
  for (const x of arr) {
    if (!set.has(x)) {
      return false;
    }
  }
  return true;
}
