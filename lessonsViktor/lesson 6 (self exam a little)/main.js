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
        scores: 90
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
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];
const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
};


// 1. Создайте поверхностную копию объекта user
let copyUser = { ...user };

// Проверка:
console.log("1");
console.log(user === copyUser); // false
console.log(user.friends === copyUser.friends); // true





// 2. Полная (глубокая) копия объекта user
let deepCopyUser = {
    ...user,
    friends: [ ...user.friends ]
};

// Проверка:
console.log("2");
console.log(user === deepCopyUser); // false
console.log(user.friends === deepCopyUser.friends); // false





// 3. Поверхностная копия массива students
let copyStudents = [ ...students ];

// Проверка:
console.log("3");
console.log(students);
console.log(students[0] === copyStudents[0]); // true





// 4. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map( st => ({ ...st }) );

// Проверка:
console.log("4");
console.log(students === deepCopyStudents); // false
console.log(students[0] === deepCopyStudents[0]); // false




// 5. Отсортируйте deepCopyStudents по алфавиту (sort)
// [...deepCopyStudents] без квадратных скобок не будет сортировать тут
// потому что есть некий баг: дальше по коду тоже идет сортировка
// и программа путается поэтому. чтобы не путалась надо опять же скопировать данные в новый массив
// [...deepCopyStudents] - делает это прям на лету, на ходу
// Как работает метод sort:
// Этому методу нажна функция сравнения, по которой будет проходить сортировка. В этой функции
// принимается 2 параметра для их сравнения. В тернарнике написано: если имя а меньше или равно
// имени b, то compareFn ретурнит отрицательное число и метод sort приняв в себя это отрицательное
// число, поймёт, что переставлять а и b местами не надо и оставит их в таком же порядке,
// как они и были. А если функция сравнения вернет любое положительное число, то метод sort
// приняв его, поймёт, что нужно поменять а и b местами, а потом sort будет сравнивать с помощью
// этой функции сравнения следующие два аргумента b и с например, а дальше с и d .....
let sortByName = [...deepCopyStudents].sort((a, b) => a.name <= b.name ? -1 : 1);
console.log("5");
console.log(students);
console.log(sortByName);





// 5a. Отсортируйте deepCopyStudents по успеваемости (лучший идёт первым) (sort)
let sortByScore = [...deepCopyStudents].sort( (a, b) => b.scores - a.scores );
console.log("5a");
console.log(sortByScore);




// 6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
// Как работает filter:
// метод filter пропускает в результирующий массив только те элементы, которые
// проходят сравнение st.scores >= 100. Т.е. тут стрелочная функция ретурнит true
// и метод filter понимает, что этот элемент, который он сейчас взял, нужно добавить
// в результирующий массив, если стрелочная функция вернет false, то filter не пропустит
// этот элемент в массив и перейдет к следующему элементу
let bestStudents = [...deepCopyStudents].filter(st => st.scores >= 100);
console.log("6");
console.log(bestStudents);





// 6а. Получите массив ("вырежте") из трёх лучших студентов из массива deepCopyStudents (splice)
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
let topStudents = sortByScore.splice(0, 3);
console.log("6a");
console.log(topStudents);





// 6b(*). Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор)
let newDeepCopyStudents = [ ...topStudents, ...sortByScore ];
console.log("6b");
console.log(newDeepCopyStudents);





// 7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.filter(st => !st.isMarried);
console.log("7");
console.log(notMarriedStudents);





// 8. Сформируйте массив имён студентов (map)
let studentsNames = students.map(st => st.name);
console.log("8");
console.log(studentsNames);





// 8a. Сформируйте строку из имён студентов, разделенных
// - запятой (join)
// - пробелом (join)
console.log("8a");
let nameWithSpace = studentsNames.join(" ");
console.log(nameWithSpace);
let namesWithComma = studentsNames.join(", ");
console.log(namesWithComma);







// 9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(st => ({...st, isStudent: true}));
console.log("9");
console.log(trueStudents);







// 10(*). Nick женился. Выполните соответствующие преобразования массива students (map)
let studentsWithMarriedNick = students.map(st => {
    if (st.name === "Nick") return {...st, isMarried: true};
    return {...st}
});
let studentsWithMarriedNick2 = students.map(st => st.name === "Nick" ? {...st, isMarried: true} : {...st});
console.log("10");
console.log(studentsWithMarriedNick);
console.log(studentsWithMarriedNick2);







// 11. Найдите студента по имени Ann (find)
let ann = students.find(st => st.name === "Ann");
console.log("11");
console.log(ann);






// 12. Найдите студента с самым высоким баллом (reduce)
// acc это аккумулятор, он аккумулирует вычисления после итерации
// el это элемент, который мы прибавляем к аккумулятору
let bestStudent = students.reduce( (acc, el) => el.scores > acc.scores ? acc : el );
console.log("12");
console.log(bestStudent);





// 13. Найдите сумму баллов всех студентов (reduce)
// в этом примере 0 идет третьим параметром и задаёт начальное значение для асс = 0
let scoreSum = students.reduce( (acc, el) => el.scores + acc, 0 );
console.log("13");
console.log(scoreSum);





// 14. Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
let addFriends = (students) => {
    // получить массив всех имен
    // отфильтровать по имени через filter - выкинуть имя студента к которому мы добавляем этот массив имен
    // каждому студенту добавить свойство френдс

};
console.log(addFriends(students))




