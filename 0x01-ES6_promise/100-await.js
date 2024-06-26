import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const phot = await uploadPhoto();
    const uz = await createUser();
    return ({ photo: phot, user: uz });
  } catch (err) {
    return { photo: null, user: null };
  }
}
