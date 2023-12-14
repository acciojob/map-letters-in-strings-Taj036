//your JS code here. If required.
function letter(word) {
	let mapletter ={}
	for(let i = 0 ; i < word.length ; i++){
		let letter = word[i];
		if(mapletter.hasOwnProperty(letter)){
			mapletter[letter].push(i);
		}
		else{
			mapletter[letter] = [i];
		}
	}
	return mapletter ;
}