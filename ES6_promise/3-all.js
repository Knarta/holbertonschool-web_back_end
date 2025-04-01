/* eslint-disable */
import { uploadPhoto, createUser } from './utils.js'

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([uploadPhoto, user]) => {
      console.log('${photo.body} ${user.first_name} ${user.last_name}');
    })
    .catch(() => {
      console.log('Signup system offline')
    });
}