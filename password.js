const { read } = require("fs");
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("Please validate password:", function(input)
{
	tokens = input.split(' ');
	
	userPassword = tokens[0];

    // console.log(userPassword)
if(userPassword.length >= 10){
    console.log('Success!')
}else if (userPassword.length < 10){
    console.log('Failure to meet password constraint.')
}
reader.close();

})

