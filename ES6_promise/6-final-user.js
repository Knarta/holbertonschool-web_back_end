/* eslint-disable */
import { signUpUser } from './4-user-promise.js'
import { uploadPhoto } from './5-photo-reject.js'

export default function andleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName),])
    .then((results) => results.map(({status, value, reason }) => ({ status, value: value || reason,})));
}