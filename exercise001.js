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

/* 
	Task 2 async, await - try{} catch{}
 	NOTE: Have kept both solutions available to show
 	the alternatives that I tested out. 
*/ 

const callPromise = async () => {
	try{
		const result = await promise;
		console.log(`Yay! Promise resolved with response ${result}`);
	} catch(error) {
		console.error(`Boo. Promise rejected with response: ${error}`);
	};
};

callPromise();

// Alternative - top level await promise
// try{
// 	const result = await promise;
// 	console.log(`Yay! Promise resolved with response ${result}`);
// } catch(error) {
// 	console.error(`Boo. Promise rejected with response: ${error}`);
// };
