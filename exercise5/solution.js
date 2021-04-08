// var age = prompt("What is your age?");

// if (Number(age) < 18) {
//     alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
//     alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// }


//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. 
//Use Function Declaration to create this function.

// function checkDriverAge() {
//     var age = prompt("What is your age?");
//     if (Number(age) < 18) {
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }

// checkDriverAge();

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

// var checkDriverAge = function() {
//     var age = prompt("What is your age?");
//     if (Number(age) < 18) {
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }

// checkDriverAge();

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
function checkDriverAge(age) {
    if (Number(age) < 18) {
        return "Sorry, you are too yound to drive this car. Powering off";
    } else if (Number(age) > 18) {
        return "Powering On. Enjoy the ride!";
    } else if (Number(age) === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    }
}