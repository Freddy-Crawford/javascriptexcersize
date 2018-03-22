var database = [
	{
		username: "freddy",
		password: "supersecret"
	}
];
//function expression
var newsFeed = [
	{
		username: "bobby",
		timeline: "so tired from learning so much js"
	},
	{
		username: "sally",
		timeline: "javascript is so cool"
	}
];

var userNamePrompt = prompt("whats your username")
var passwordPrompt = prompt("whats your password")
//function
function signIn(user,pass) {
	if (user === database[0].username && pass ===database[0].password){
		console.log(newsFeed);
	} else {
		alert("sorry,wrong username and password");
	}
}
//invoking the function or calling
signIn(userNamePrompt, passwordPrompt);
