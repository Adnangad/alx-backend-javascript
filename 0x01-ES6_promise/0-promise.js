#!/usr/bin/node
export default function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		let ans = true;
		if (ans === true) {
			resolve('true');
		}
		else {
			reject('flase');
		};
	})
}
