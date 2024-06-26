export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
    return {
      status: 200,
      body: 'Success',
    };
  }).then((response) => response).catch(() => {
    const ob = {};
    return new Error(ob);
  });
}
