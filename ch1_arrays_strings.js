//1.1 Is Unique (string) => boolean
function isUnique(string){
	let dict = {};
	for(let i = 0; i < string.length; i++){
		if(!dict[string[i]]) dict[string[i]] = true;
		else return false;
	}
	return true;
}