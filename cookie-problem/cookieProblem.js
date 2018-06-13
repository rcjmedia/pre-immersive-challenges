module.exports = function cookieProblem(array) {
  // write your code in here

  var moreCookies = 0; //Who has more cookies
  var differentCookies = 0; //Cookie difference
  var additionalCookies = 0; //Additional cookies

  for(var i = 0; i<array.length; i++){ //console.log("current highest cookie amount: " + moreCookies);

    if(array[i] > moreCookies){ //Update the highest cookie amount if person has the most cookies 
      moreCookies = array[i];    }
  }
  //console.log("Final highest cookie amt count: " + moreCookies);
  for(var j = 0; j<array.length; j++){//Loop through array to determine how many more cookies need to be given per person using the difference from the highest cookie count and then total the amount of cookies added
    if(array[j] !== moreCookies){
      differentCookies = moreCookies - array[j];
      //console.log("cookie difference :" + differentCookies);
      additionalCookies += differentCookies;
      console.log("Total Cookies to add: " + additionalCookies);
    }
  }
  return additionalCookies;
}