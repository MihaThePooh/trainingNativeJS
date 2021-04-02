




// ПЕРВАЯ ЧАСТЬ ЛЕКЦИИ
// 1. Примитивы:
// number, string, boolean, null, undefined, NaN, Symbol, BigInt
// 2. Объекты:
// object, array, function (у неё есть методы apply, bind, call и свойства, например, name)
// - сложная структура
// - имеют свойства и методы
// - объекты имеют ссылочный тип данных

// КОНЦЕПЦИЯ REACT ИМЬЮТАБЕЛЬНОСТЬ ДАННЫХ - СОХРАНЕНИЕ ИСХОДНЫХ ДАННЫХ, НЕИЗМЕНЯЕМОСТЬ ДАННЫХ
// чтобы изменить какие-то данные, надо прежде сохранить исходник, обязательно

const student = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Helen", "Donald"]
}

console.log(student) // это один объект, он лежит в одной ячейке памяти

const studentPlus = student
console.log(student === studentPlus) // true - потому что сравниваем 2 ссылки на 1 объект
const studentCopy2 = {...student} // оператором ... разкукоживаем объект и запихиваем всего его данные в такой же структурой в новый объект

const studentCopy = {} // создали новый объект в новой ячейке памяти
console.log(student === studentCopy) // false - потому что сравниваем 2 ссылки на 2 разных объекта

// чтобы сделать глубокую копию объекта, нужно деструктурировать каждый вложенный ОБЪЕКТ,
// примитивы копируются сами, а вложенные массивы, объекты и функции не скопируются -
// скопируются только ССЫЛКИ на них

// глубокая копия
const studentDeepCopy = {...student, friends: [...student.friends]}
console.log(student.friends === studentDeepCopy.friends) // false - потому что мы сравнимаем 2 разных массива, которые лежат в разных ячейках памяти и имеют разные ссылки
// есть lodash.com
// специальная библиотека, для удобного глубокого копирования объектов
// ты же не знаешь сколько там вложенных объектов, функция cloneDeep(obj)
// скопирует всё как надо, со всеми вложенностями





// ВТОРАЯ ЧАСТЬ ЛЕКЦИИ
// все функции ретурнят только одну какую-то функцию
// чтобы вернуть из функции несколько сущностей, можно объединить их в одну сущность
function myFunc(a) {
    const b = () => console.log(a)
    return [a, b]
}
const result = myFunc(10)
console.log(result) // выведет массив [ 10, ()=>{} ]
const [num, fn] = result // деструктуризация на лету, КАЖДЫЙ ДЕНЬ ИСПОЛЬЗУЕТСЯ!!!
console.log(num, fn) // выведет наше 10 и ()=>{}





// ТРЕТЬЯ ЧАСТЬ ЛЕКЦИИ
// map
const students = [
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

const names = students.map(student => student.name)
// map принемает функцию в скобочках и применяет её к массиву students
// student - это аргумент, тут мы его объеявляем
// student.name - возьми name каждого студента и ретурни
// map вернет массив из элементов name каждого студента
console.log(names) // ["Bob", "Alex", "Nick", "John"]

const addAgeSts = students.map(st => {
    return {...st, age: st.age + 1}
})
// тут map возвращает объкт, но map возвращает новый массив всегда, поэтому в итоге
// вернется новый массив объектов. в этот объект мы раскукожили (поверхностно скопировали)
// каждого студента и у каждого свойства age взяли изначальное значение age (st.age) и прибавили 1
// и записали к скопированному (раскукоженному) объекту студента



// вот это будем делать в понедельник
// const listItems = tasks.map(t => {
//     return <li>
//                 <input type={checkbox} checked={t.isDone}/>
//                 <span>{t.title}</span>
//             </li>
// })




