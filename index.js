function isPalindrome(word) {
  //Pass word argument as context object to called reverseStringArray function and assign to new variable:
  let revStringArray = reverseStringArray.call(word);
  //return reversed array for the passed in word argument:
    console.log(revStringArray); //= > Expect reverse of word argument ie ['d', 'r', 'o', 'w']
  return filterStringArray.call(revStringArray, word);
}

// Reverse the new string array:

function reverseStringArray() {

  return [...this].reverse();
}

// Filter through the reversed string array:

function filterStringArray(word) {
  //Compare each element (letter) in the reversed array against its counterpart in the word argument:
  let filterString = this.filter((element, i) => { return element === word[i]; });
  if (filterString.length === word.length) {
    return true;
  } else {
    return false;
  }
  //If a match is found, push the element to the filter array:
}

/* 
  Add pseudocode for your solution here:

  Pass word argument as context object to called reverseStringArray function and assign to a new variable:
      Return reversed array variable for the passed in word argument:
      Pass reversed array variable as context object and the word argument to called filterStringArray function and return the result.
*/

/*
  Add written explanation of your solution here:

  1) Reverse the string array (word) using reverse() and assign it to a new variable.

  2) Filter through the reversed string array, comparing each element (letter) in the array against its reverse counterpart in the unmodified string array (word).
      If a match is found, push the element to a new filtered array:
  
  3) Compare the filtered array's length to the originial string array's length:
      If a match is found (ie if all elements were added to the filter array, then there is a match):
        Return true.
      Else (ie if not all elements were added to the filter array, the filter array length will not match the unmodified array length):
        Return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here:

  //Expect 'redder' to return true:
  console.log("Expecting: true");
  console.log("=>", isPalindrome("redder"));

  console.log("");

  //Expect 'motor' to return false:
  console.log("Expecting: false");
  console.log("=>", isPalindrome("motor"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
