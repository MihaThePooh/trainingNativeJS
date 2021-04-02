// Associative array

const todoListID1 = "2398f-3w4";
const todoListID2 = "dot3-sdf";

const todoLists = [
    {
        id: todoListID1,
        title: "What to buy",
        filter: "all",
    },
    {
        id: todoListID2,
        title: "What to learn",
        filter: "active",
    },
];

const tasks = {
    [todoListID1]: [
        {id: 1, title: "Milk", isDone: false},
        {id: 2, title: "Bear", isDone: false},
        {id: 3, title: "Fish", isDone: false},
    ],
    [todoListID2]: [
        {id: 1, title: "JS", isDone: false},
        {id: 2, title: "HTML", isDone: false},
        {id: 3, title: "CSS", isDone: false},
    ]
};


console.log(tasks[todoListID1][1].title);
console.log(tasks[todoListID1].find(task => task.id === 3));
console.log(todoLists.find(tl => tl.id === todoListID2));


const students = {
    0: "Alex",
    1: "Bob",
    2: "Nick"
};
console.log(students["0"]); // работает
console.log(students[0]); // и так работает работает, а через точну не работает







// Reduce (перевод: уменьшить, уменьшать, сокращать)
// это функция, чтобы свести массив к какому-то одному усредненному значению
// некое "среднее арифметическое"

const numbers = [23, 45, 56, 46, 67, 87];

const avarage = numbers.reduce( (acc , el ) => acc + el , 0 )
// reduce принимает стрелочную ф-цию или callback
// в асс записывается результат предыдущей операции 0 + 23 = 23 (в асс село 23)
// 0 - это второй аргумент reduce, он не обязательный. это просто стартовое значение.
// поставь туда цифру 6 и reduce будет считать 6 + 24 и в асс сядет уже 30 и с этим уже будет дальше работа идти
// el - каждый элемент массива

console.log(avarage)





let studentsR = [
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
        scores: 100
    }
];

console.log("Всё ок")
console.log(studentsR.reduce( (acc, el) => el.scores + acc, 0) )
// тут все ок, потому что явно задано стартовое значиние ЧИСЛО 0

console.log("Не ок")
console.log(studentsR.reduce( (acc, el) => el.scores + acc) )
// тут выводится ерунда, потому что в качестве начального значения acc взят объект,
// а объект не число и JS привел объект к строке и сконкотенировал эту строку с другими строками el.scores

console.log("Максимальное число:")
console.log(numbers.reduce((acc, el) => acc > el ? acc : el))






// как бы самописный filter через reduce
function filterAlex(acc, el) {
    if (el.name === "Alex") {
        acc.push(el)
    }
    return acc
}
console.log("filterAlex:")
console.log(studentsR.reduce(filterAlex, []))

// как бы самописный find через reduce
function findAlex(acc, el) {
    if (el.name === "Alex") {
        acc = el
    }
    return acc
}
console.log("findAlex:")
console.log(studentsR.reduce(findAlex, []))





l



