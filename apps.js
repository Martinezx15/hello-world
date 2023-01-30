let username = prompt('What is your name?');
console.log('Hello, ' + username);
function myAlert()
{
    alert("I am an event handler....");
	return;
}
alert("You must love Fishing to view this website");

var userPreference;

function ratPicture() {
    let number = prompt("How many ratmen can you fight? Pick a number between 1 and 3");
    console.log(number);

    if (number == 1 || number == 2 || number == 3) {
        console.log(number);
    } else {
        ratPicture();
    }

    for (let i = 0; i < number; i++) {
        document.write("<img src='./stormvermin.jpg' width = '32%'></img>");
        console.log(number);
        console.log(i);
    }
}
