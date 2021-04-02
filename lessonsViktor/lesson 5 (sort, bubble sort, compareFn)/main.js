const array = [777, 23, 12, 43, 32, 65, 82, 21, 0, 99];

// Bubble sort
for (let j = 0; j < array.length; j++) {
    let sort = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            sort = false;
            let temp = array[i + 1];
            array[i + 1] = array[i];
            array[i] = temp
        }
    }
    if (sort) {
        break
    }
}

console.log(array);


// compare
const numbers = [100, 90, 1000, 2];

const compareFn = (a, b) => a - b;
// function compareFn(a, b) {
//     if (a <= b) {
//         return -1
//     } else {
//         return 1
//     }
// }

console.log(numbers.sort(compareFn));


// отфильтровать массив объектов
let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    }
];

console.log(students.sort((a, b) => a.scores - b.scores));
console.log(students.sort((a, b) => b.age - a.age).reverse());

console.log(students.sort((a, b) => {
    if (a.name < b.name) {
        return -1
    } else {
        return 1
    }
}));
console.log(students.sort((a, b) => a.name < b.name ? -1 : 1));

console.log(students.sort((a, b) => !a.isMarried ? -1 : 1));


