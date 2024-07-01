export default function createInt8TypedArray(length, position, value) {
  const arr = new Int8Array(length);
  try {
    arr[position] = value;
  } catch (error) {
    throw new Error('Position outside range');
  }
  const { buffer } = arr;
  const temp = new DataView(buffer);
  return temp;
}
