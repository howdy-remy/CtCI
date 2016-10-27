//1.1 Is Unique (string) => boolean
function isUnique(string){
	let dict = {};
	for(let i = 0; i < string.length; i++){
		if(!dict[string[i]]) { dict[string[i]] = true; }
		else { return false; }
	}
	return true;
}

//1.2 Check Permutation (string, string, boolean) => boolean
function checkPermutation(stringA, stringB, caseSensitive = false){
	if(!caseSensitive) {
		stringA = stringA.toLowerCase();
		stringB = stringB.toLowerCase();
	}
	if(stringA.length !== stringB.length) return false;
	
	let objA = {};

	for(let i = 0; i < stringA.length; i++){
		if(!objA[stringA[i]]) { objA[stringA[i]] = 1 }
		else { objA[stringA[i]]++ }
	}

	for(let j = 0; j < stringB.length; j++){
		if(!objA[stringB[j]]) { return false; }
		else { objA[stringB[j]]-- }

		if (objA[stringB[j]] < 0) { return false }
	}
	return true;
}

//1.3 URLify (string) => string
function urlify(string){
	return string.trim().split(' ').join('%20');
}

//1.4 Palindrome Permutation (string) => boolean
function palindrome(string){
	string = string.toLowerCase().replace(/\s/,'');

	let obj = {};
	let odd = false;

	for(let i = 0; i < string.length; i++){
		if(!obj[string[i]]) { obj[string[i]] = 1 }
		else { obj[string[i]]++ }
	}

	for(let key in obj){
		if(obj[key] % 2 !== 0 && odd === true ) return false;
		else if (obj[key] % 2 !== 0) odd = true;
	}

	return true;
}