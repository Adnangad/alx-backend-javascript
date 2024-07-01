export default function getStudentsByLocation(lstofstd, city) {
  const fin = lstofstd.filter((key) => key.location === city);
  return fin;
}
