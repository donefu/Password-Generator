// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberChar = "0123456789";
let specialChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
let temp = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Check the length of the password
let lengthCheck;
function checkLength() {
  lengthCheck = prompt(
    "Choose the length of your password. The password must have at least 8 characters and no more than 128 characters: "
  );
  // Check if the input is none, it will ask again
  if (isNaN(lengthCheck)) {
    alert("Please enter your password.");
    console.log(lengthCheck);
    checkLength();
  }
  // Check if the input is less than 8, it will ask again
  else if (lengthCheck < 8) {
    alert("Cannot be generated. The password must have at least 8 characters");
    console.log(lengthCheck);
    checkLength();
  }
  // If the input is acceptable, will go through next prompt
  else if (lengthCheck >= 8 && lengthCheck <= 128) {
    console.log(lengthCheck);
    alert("Next question !!!");
  }
  // otherwise it will bring back the question again
  else {
    console.log(lengthCheck);
    alert("Cannot be generated. The password cannot have more 128 characters");
    checkLength();
  }
}

// Check if users want to include uppercase
let upperCheck;
function checkUpper() {
  upperCheck = prompt("Do you want uppercase in your password? Type Yes or No");
  if (upperCheck == "Yes") {
    upperCheck = true;
    console.log(upperCheck);
    return upperCheck;
  } else if (upperCheck == "No") {
    upperCheck = false;
    console.log(upperCheck);
    return null;
  } else {
    console.log(upperCheck);
    alert("Please enter your answer!");
    checkUpper();
  }
  return upperCheck;
}

// Check if users want to include lower case
let lowerCheck;
function checkLower() {
  lowerCheck = prompt("Do you want lowercase in your password? Type Yes or No");
  if (lowerCheck == "Yes") {
    lowerCheck = true;
    console.log(lowerCheck);
    return lowerCheck;
  } else if (lowerCheck == "No") {
    lowerCheck = false;
    console.log(lowerCheck);
    return null;
  } else {
    console.log(lowerCheck);
    alert("Please enter your answer!");
    checkLower();
  }
  return lowerCheck;
}

// Check if users want to include numeric
let numberCheck;
function checkNumber() {
  numberCheck = prompt("Do you want numbers in your password? Type Yes or No");
  if (numberCheck == "Yes") {
    numberCheck = true;
    console.log(numberCheck);
    return numberCheck;
  } else if (numberCheck == "No") {
    numberCheck = false;
    console.log(numberCheck);
    return null;
  } else {
    console.log(numberCheck);
    alert("Please enter your answer!");
    checkNumber();
  }
  return numberCheck;
}
// Check if users want to include special characters
let specialCheck;
function checkSpecial() {
  specialCheck = prompt(
    "Do you want special characters in your password? Type Yes or No"
  );
  if (specialCheck == "Yes") {
    specialCheck = true;
    console.log(specialCheck);
    return specialCheck;
  } else if (specialCheck == "No") {
    specialCheck = false;
    console.log(lowerCheck);
    return null;
  } else {
    alert("Please enter your answer!");
    console.log(specialCheck);
    checkSpecial();
  }
  return specialCheck;
}
// Combine all the answer above
let makingPassword = "";
function generatePassword() {
  let temp = "";
  checkLength();
  checkUpper();
  checkLower();
  checkNumber();
  checkSpecial();

  if (upperCheck) {
    temp = temp + upperChar;
  }
  if (specialCheck) {
    temp = temp + specialChar;
  }
  if (numberCheck) {
    temp = temp + numberChar;
  }
  if (lowerCheck) {
    temp = temp + lowerChar;
  }
  console.log(temp);
  makingPassword = "";
  for (i = 0; i < lengthCheck; i++) {
    makingPassword = makingPassword.concat(
      temp[Math.floor(Math.random() * temp.length)]
    );
    console.log(makingPassword);
  }
  console.log(makingPassword);

  return makingPassword;
}
