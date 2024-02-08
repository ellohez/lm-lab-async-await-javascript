const promise = new Promise((resolve, reject) => {
	// Generate random number between 0 and 9
	const randomInt = Math.floor(Math.random() * 10);

	if (randomInt % 2 === 0) {
		// Success
		setTimeout(() => resolve('done'), 2000);
	} else {
		// Failure
		setTimeout(() => reject('error'), 2000);
	}
});

// Task 1 .then .catch
promise
	.then(result => console.log(`Yay! Promise resolved with response ${result}`))
	.then(console.warn("This second .then completes before the first"))
	.catch(error => console.log(`Boo. Promise rejected with response: ${error}`));

// Task 2 async, await - try{} catch{}
// try{
 
// } catch {

// };