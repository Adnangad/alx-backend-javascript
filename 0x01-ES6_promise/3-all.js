import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const createUs = createUser();
  const uplod = uploadPhoto();
  Promise.all([uplod, createUs])
    .then((values) => {
      let text = '';
      for (const x of values) {
        if (x.body) {
          text += `${x.body} `;
        }
        if (x.firstName) {
          text += `${x.firstName}`;
        }
        if (x.lastName) {
          text += ` ${x.lastName}`;
        }
      }
      console.log(text);
    })
    .catch(() => {
      console.log(new Error('Signup system offline'));
    });
}
