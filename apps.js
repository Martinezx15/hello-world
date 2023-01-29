
function userGreeting() {
    userName = prompt("Hola! What's your first name?");
    console.log(userName);
    document.write("Hola " + userName+"! ");
    return userName;
}

userGreeting();

alert("You must love Fishing to view this website");

function loveConfirm() {
    let love = prompt("Do you love Fishing? yes or no.");

    if (love) {
        while (love.toLowerCase() !== "yes") {
            loveConfirm();
            console.log(love);
            return love;
        }
    } else { 
        loveConfirm();
    }
}
    loveConfirm();

   


