var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

var todosLength = todos.length;

for (var i = 0; i < todosLength; i++) {
    console.log(todos[i], i);
}

todos.forEach(function(todo, i) {
    console.log(todo, i);
})


// var counterOne = 10;
// while (counterOne > 10) {
//     console.log("while", counterOne);
//     counterOne--;
// }

// var counterTwo = 10;
// do {
//     console.log("do while", counterTwo);
//     counterTwo--;
// } while (counterTwo > 10);