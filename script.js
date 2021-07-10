// Character Arrays
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const special1 = Array.from(Array(15)).map((e, i) => i + 33);
const special2 = Array.from(Array(7)).map((e, i) => i + 58);
const special3 = Array.from(Array(6)).map((e, i) => i + 91);
const special4 = Array.from(Array(4)).map((e, i) => i + 123);
const special = special1.concat(special2, special3, special4);
const upperAlphabet = alpha.map((x) => String.fromCharCode(x));
const lowerAlphabet = upperAlphabet.map(v => v.toLowerCase());
const numberChars = Array.from(Array(10).keys());
const specialChars = special.map((x) => String.fromCharCode(x));
// Remove problematic special characters \, /, \\
specialChars.splice(1, 1);
specialChars.splice(13,1);
specialChars.splice(21,1);
specialChars.splice(10,1);






// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function that generates a password
function generatePassword() {
  var passwordLength = prompt("Choose a password length between 8 and 128 characters");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid entry, please enter a number between 8 and 128");
    return;
  }

  // Password object
  var password = {
    charLength: passwordLength,
    lowerCase: true,
    upperCase: true,
    numbers: true,
    specials: true,
    allFalse: function() {
      if (this.lowerCase === false && this.upperCase === false &&
          this.numbers === false && this.specials === false) {
            alert("Empty password, please try again.")
          }
    }
  }
// Lower case prompt
  lowerCasePrompt = prompt("Use lower case letters? Y or N");
  if (lowerCasePrompt == "Y" || lowerCasePrompt == "y") {
    password.lowerCase = true;
  } else if (lowerCasePrompt == "N" || lowerCasePrompt == "n") {
    password.lowerCase = false;
  } else {
    alert("Invalid entry, defaulting to true");
  }
  // Upper case prompt
  upperCasePrompt = prompt("Use upper case letters? Y or N");
  if (upperCasePrompt == "Y" || upperCasePrompt == "y") {
    password.upperCase = true;
  } else if (upperCasePrompt == "N" || upperCasePrompt == "n") {
    password.upperCase = false;
  } else {
    alert("Invalid entry, defaulting to true");
  }
  // Numbers prompt
  numbersPrompt = prompt("Use numbers in password? Y or N");
  if (numbersPrompt == "Y" || numbersPrompt == "y") {
    password.numbers = true;
  } else if (numbersPrompt == "N" || numbersPrompt == "n") {
    password.numbers = false;
  } else {
    alert("Invalid entry, defaulting to true");
  }
  // Special characters prompt
  specialsPrompt = prompt("Use special charactes in password? Y or N");
  if (specialsPrompt == "Y" || specialsPrompt == "y") {
    password.specials = true;
  } else if (specialsPrompt == "N" || specialsPrompt == "n") {
    password.specials = false;
  } else {
    alert("Invalid entry, defaulting to true");
  }
  // Check if password is empty
  password.allFalse();

  // Generate password, 16 cases
  // First case : All true 1111
  if (password.lowerCase == true && password.numbers == true &&
      password.specials == true && password.upperCase == true) {
        var totalChars = specialChars.concat(numberChars, lowerAlphabet, upperAlphabet);
        var passwordArray = [];
        for (i=0; i < password.charLength; i++) {
          passwordArray.push(totalChars[Math.floor(Math.random() * (totalChars.length - 1))]);
        }
      }
  // Second case : 1110
  else if (password.lowerCase == true && password.numbers == true &&
    password.specials == true && password.upperCase == false) {
      var totalChars = specialChars.concat(numberChars, lowerAlphabet);
      var passwordArray = [];
      for (i=0; i < password.charLength; i++) {
        passwordArray.push(totalChars[Math.floor(Math.random() * (totalChars.length - 1))]);
      }
  }
  // Third case : 1101
  else if (password.lowerCase == true && password.numbers == true &&
    password.specials == false && password.upperCase == true) {
      var totalChars = upperAlphabet.concat(numberChars, lowerAlphabet);
      var passwordArray = [];
      for (i=0; i < password.charLength; i++) {
        passwordArray.push(totalChars[Math.floor(Math.random() * (totalChars.length - 1))]);
      }
  }
  // Fourth case : 1011
  else if (password.lowerCase == true && password.numbers == false &&
           password.specials == true && password.upperCase == true) {
            var totalChars = upperAlphabet.concat(specialChars, lowerAlphabet);
            var passwordArray = [];
            for (i=0; i < password.charLength; i++) {
              passwordArray.push(totalChars[Math.floor(Math.random() * (totalChars.length - 1))]);
            }
  }
  // Fifth case : 0111
  else if (password.lowerCase == false && password.numbers == true &&
    password.specials == true && password.upperCase == true) {
      var totalChars = upperAlphabet.concat(specialChars, numberChars);
      var passwordArray = [];
      for (i=0; i < password.charLength; i++) {
        passwordArray.push(totalChars[Math.floor(Math.random() * (totalChars.length - 1))]);
      }
  }
  // Sixth case : 1100
  // else if () {

  // }
  // Seventh case : 1010
  // else if () {

  // }
  // else if () {

  // }
  // else if () {

  // }
  // else if () {

  // }
  // else if () {

  // }
  // else if () {

  // }
  // else if () {

  // }
  // else if () {

  // }
  // else if () {

  // }

  var passwordStr = passwordArray.toString();
  var passwordStr1 = passwordStr.replace(/,/g, "");
  return passwordStr1;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
