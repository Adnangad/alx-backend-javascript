import getListStudentIds from './1-get_list_student_ids';
import getListStudents from './0-get_list_students';

export default function getStudentIdsSum(students) {
  function sum() {
    const rez = getListStudentIds(getListStudents());
    let initial = 0;
    for (const x of rez) {
      initial += x;
    }
    return initial;
  }
  const fin = students.reduce(sum);
  return fin;
}
