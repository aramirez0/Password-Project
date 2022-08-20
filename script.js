// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
console.log("Hey, you clicked the button.")
}

var passwordLengthUser = prompt("How many characters would you like your password to be? Must be 8<128 characters.");

var passwordLengthUser = parseInt(passwordLengthUser);
if (passwordLengthUser <8)
alert("Password must be more than 7 characters.");

var passwordLengthUser = parseInt(passwordLengthUser);
if (passwordLengthUser >128)
alert("Password must be less than 128 characters.");


var Lowercase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ];
var Uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var Numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];
var special = [ '!', '"', '#', '$', '%', '&', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ];
 


for (var i = 0; i <Lowercase.passwordLengthUser; i++){
  Uppercase[i] = Lowercase[i].toUpperCase()
}

if (confirm("Would you like to use lowercase characters?")){
  var Lowercase = Lowercase.concat(Uppercase)
 };

  if (confirm("Would you like to use uppercase characters?")){
    var Uppercase = Uppercase.concat(Numeric)
  };

  if (confirm("Would you like to use any numbers?")){
    var Numeric = Numeric.concat(special)
  };

  if (confirm("Would you like to use any special characters?")){
    var special = special.concat(Lowercase)
  };
function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
