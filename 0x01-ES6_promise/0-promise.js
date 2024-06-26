#!/usr/bin/node
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const ans = true;
    if (ans === true) {
      resolve('true');
    } else {
      reject(new Error('flase'));
    }
  });
}
