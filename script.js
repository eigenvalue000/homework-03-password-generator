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
  lowerCasePrompt = confirm("Use lower case letters?");
  if (lowerCasePrompt == true) {
    password.lowerCase = true;
  } else if (lowerCasePrompt == false) {
    password.lowerCase = false;
  } else {
    alert("Invalid entry, defaulting to true");
  }
  // Upper case prompt
  upperCasePrompt = confirm("Use upper case letters?");
  if (upperCasePrompt == true) {
    password.upperCase = true;
  } else if (upperCasePrompt == false) {
    password.upperCase = false;
  } else {
    alert("Invalid entry, defaulting to true");
  }
  // Numbers prompt
  numbersPrompt = confirm("Use numbers in password?");
  if (numbersPrompt == true) {
    password.numbers = true;
  } else if (numbersPrompt == false) {
    password.numbers = false;
  } else {
    alert("Invalid entry, defaulting to true");
  }
  // Special characters prompt
  specialsPrompt = confirm("Use special characters in password?");
  if (specialsPrompt == true) {
    password.specials = true;
  } else if (specialsPrompt == false) {
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
  else if (password.lowerCase == true && password.numbers == true &&
    password.specials == false && password.upperCase == false) {
      var totalChars = lowerAlphabet.concat(numberChars);
      var passwordArray = [];
      for (i=0; i < password.charLength; i++) {
        passwordArray.push(totalChars[Math.floor(Math.random() * (totalChars.length - 1))]);
      }
  }
  // Seventh case : 1010
  else if (password.lowerCase == true && password.numbers == false &&
    password.specials == true && password.upperCase == false) {
      var totalChars = lowerAlphabet.concat(specialChars);
      var passwordArray = [];
      for (i=0; i < password.charLength; i++) {
        passwordArray.push(totalChars[Math.floor(Math.random() * (totalChars.length - 1))]);
      }
  }
  // Eighth case : 1001
  else if (password.lowerCase == true && password.numbers == false &&
    password.specials == false && password.upperCase == true) {
      var totalChars = lowerAlphabet.concat(upperAlphabet);
      var passwordArray = [];
      for (i=0; i < password.charLength; i++) {
        passwordArray.push(totalChars[Math.floor(Math.random() * (totalChars.length - 1))]);
      }
  }
  // Ninth case : 0101
  else if (password.lowerCase == false && password.numbers == true &&
    password.specials == false && password.upperCase == true) {
      var totalChars = numberChars.concat(upperAlphabet);
      var passwordArray = [];
      for (i=0; i < password.charLength; i++) {
        passwordArray.push(totalChars[Math.floor(Math.random() * (totalChars.length - 1))]);
      }
  }
  // Tenth case : 0011
  else if (password.lowerCase == false && password.numbers == false &&
    password.specials == true && password.upperCase == true) {
      var totalChars = specialChars.concat(upperAlphabet);
      var passwordArray = [];
      for (i=0; i < password.charLength; i++) {
        passwordArray.push(totalChars[Math.floor(Math.random() * (totalChars.length - 1))]);
      }
  }
  // Eleventh case : 0110
  else if (password.lowerCase == false && password.numbers == true &&
    password.specials == true && password.upperCase == false) {
      var totalChars = specialChars.concat(numberChars);
      var passwordArray = [];
      for (i=0; i < password.charLength; i++) {
        passwordArray.push(totalChars[Math.floor(Math.random() * (totalChars.length - 1))]);
      }
  }
  // Twelvth case : 1000
  else if (password.lowerCase == true && password.numbers == false &&
    password.specials == false && password.upperCase == false) {
      var totalChars = lowerAlphabet;
      var passwordArray = [];
      for (i=0; i < password.charLength; i++) {
        passwordArray.push(totalChars[Math.floor(Math.random() * (totalChars.length - 1))]);
      }
  }
  // Thirteenth case : 0100
  else if (password.lowerCase == false && password.numbers == true &&
    password.specials == false && password.upperCase == false) {
      var totalChars = numberChars;
      var passwordArray = [];
      for (i=0; i < password.charLength; i++) {
        passwordArray.push(totalChars[Math.floor(Math.random() * (totalChars.length - 1))]);
      }
  }
  // Fourteenth case : 0010
  else if (password.lowerCase == false && password.numbers == false &&
    password.specials == true && password.upperCase == false) {
      var totalChars = specialChars;
      var passwordArray = [];
      for (i=0; i < password.charLength; i++) {
        passwordArray.push(totalChars[Math.floor(Math.random() * (totalChars.length - 1))]);
      }
  }
  // Fifteenth case : 0001
  else if (password.lowerCase == false && password.numbers == false &&
    password.specials == false && password.upperCase == true) {
      var totalChars = upperAlphabet;
      var passwordArray = [];
      for (i=0; i < password.charLength; i++) {
        passwordArray.push(totalChars[Math.floor(Math.random() * (totalChars.length - 1))]);
      }
  }

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
