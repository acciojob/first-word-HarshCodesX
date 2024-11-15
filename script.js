function firstWord(s) {
  // your code here
	if(s == ""){
    return "";
  }
  let res = s.split(" ");
  return res[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
