const test = () => "test";
// () => "test" такая функция создается и умирает в моменте. это литерал функции


// это конкретное создание конкретной функции. test - это имя функции
// function test() {
//     return "test"
// }


// 1. Передача функции в качестве callback'а
// - передача литерала функции
// - передача имени функции


// эти два консоля это разные консоли!
console.log(test)
console.log( () => "test" )


// 2. Передача РЕЗУЛЬТАТА ВЫЗОВА функции
console.log(test()) // test() с круглыми скобками - это ВЫЗОВ функции в этом конкретном месте кода
console.log("test")






// MAP
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
        scores: 100
    }
];

function samopisniyMAP(array, callbackFn) {
    const newArr = []

    for(let i = 0; i < array.length; i++) {
        newArr[i] = callbackFn(array[i])
    }

    return newArr
}

// Допустим стоит такая задача: добавить каждому студенту 10 баллов
// Описываем "функцию преобразователь"

// эти две функции ОДИНАКОВЫЕ (просто разный синтаксис)
const addScore1 = (student) => ({ ...student, scores: student.scores + 10 }); // тут стоят круглые скобки, потому что из этой функции мы возвращаем ОБЪЕКТ
// function addScore2(student) {
//     const studentCopy = {...student}
//     studentCopy.scores = student.scores + 10
// }

console.log(samopisniyMAP(students, addScore1))
// в консоль выводится НОВЫЙ массив с измененными объектами






// FILTER
function samopisniyFILTER(array, callbackFn) {
    const newArr = []

    for(let i = 0; i < array.length; i++) {
        if(callbackFn(array[i]) === true) {
            newArr.push(array[i])
        }
    }
    return newArr
}

const bestStudent = samopisniyFILTER(students, student => student.scores >= 100 )
// эта функция фильтрует всех студентов и удаляет те, у которых очков меньше 100
console.log(bestStudent)

const marriedStudent = samopisniyFILTER(students, student => !student.isMarried)
console.log(marriedStudent)

const notMarriedStudent = samopisniyFILTER(students, student => student.isMarried)
console.log(notMarriedStudent)





// FIND
function samopisniyFIND(array, callbackFn) {
    for(let i = 0; i < array.length; i++) {
        if(callbackFn(array[i]) === true) {
            return array[i]
        }
    }
}

// найдет первый элемент с именем "Alex" и вернет его
const studentAlex = samopisniyFIND(students, student => student.name === "Alex")
console.log(studentAlex)













