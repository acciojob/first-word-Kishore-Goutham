function firstWord(s) {
  // your code here

	if(str==""){
		return "";
	}
	let index = str.index(" ");
	if(index==-1){
		return str
	}

	return str.slice(0,index)
}
  
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
