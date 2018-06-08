module.exports = function acceptableSequence(str) {
  
  var Letter = str.match(/[a-z]/gi); // Strings have indexes!!!
  console.log(Letter);
  
  var marked = true;  //Replace return

  //Loop array of letters and check for '+' characters before and after 
  for(var i=0; i<Letter.length; i++){  

    var dir = str.indexOf(Letter[i]);  //Checks index of the letter

    var before = dir - 1; // index before letter
    var after = dir + 1; // index after letter

    //If before and after the letter has '+'s, then marked = true 
    if(str[before] === "+" && str[after] === "+"){
      marked = true;
    }
    // If before or after letter is not a '+'s, then marked = false. Per TA's return stops the codes.
    else if(str[before] !== "+" || str[after] !== "+"){
      marked = false;
      console.log("Unacceptable");
      return marked;
    }
    console.log("Acceptable");
    return marked;
  }
}