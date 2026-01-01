function firstWord(s) {
  // your code here

	if(s.length==0){
		return (s);
	}	
	let str = s.trim().split(" ");
	return str[0];
}
  
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
