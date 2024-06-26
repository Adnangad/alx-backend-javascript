import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const ls = [];
  try {
    const prom1 = await signUpUser(firstName, lastName);
    ls.push({ status: 'fulfilled', value: prom1 });
  } catch (err) {
    ls.push({ status: 'rejected', value: err.toString() });
  }
  try {
    const prom2 = await uploadPhoto(fileName);
    ls.push({ status: 'fulfilled', value: prom2 });
  } catch (err) {
    ls.push({ status: 'rejected', value: err.toString() });
  }
  return ls;
}
