/* eslint-disable */
export default function handleResponseFromAPI(promise) {
  const msg = 'Got a response from the API';

  return promise
    .then(() => {
      console.log(msg);
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      console.log(msg);
      return new Error();
    });
}