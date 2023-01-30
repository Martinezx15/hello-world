let username = prompt('What is your name?');
console.log('Hello, ' + username);
function myAlert()
{
    alert("I am an event handler....");
	return;
}
alert("You must love Fishing to view this website");

function consoleChoice() {
  let number = prompt(
    "Pick a number depending on your preferred gaming console. 1 for PC, 2 for Xbox, 3 for Playstation, or 4 for none of the above";
  );
  console.log(number);
  if (number == 1 || number == 2 || number == 3) {
    console.log(number);
  } else {
    consoleChoice();
  }

  for (let i = 0; i < number; i++) {
    document.write("<img src='./surfacelaptop.jpg' width = '50%'></img>");
    console.log(number);
    console.log(i);
  }
}
