export default function getListStudentIds(liststd) {
  if (!Array.isArray(liststd)) {
    return [];
  }
  const rez = liststd.map((key) => key.id);
  return rez;
}
