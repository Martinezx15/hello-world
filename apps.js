let username = prompt('What is your name?');
console.log('Hello, ' + username);
function myAlert()
{
    alert("I am an event handler....");
	return;
}
alert("You must love Fishing to view this website");

var userPreference;

if (confirm("Do you want to save changes?") == true) {
    userPreference = "Data saved successfully!";
} else {
    userPreference = "Save Cancelled!";
}
