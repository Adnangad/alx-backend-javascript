export default function updateUniqueItems(map) {
  try {
    map.forEach((value, key) => {
      if (value === 1) {
        map.set(key, 100);
      }
    });
    return map;
  } catch (error) {
    throw new Error('Cannot process');
  }
}
