// EVENT

// По порядку:
// 1. Событие ->
// 2. Есть ли обработчик? -> handler, listener, слушатель, subscriber, подписчик..
// 3. Вызов функции-обработчика
// 4. Передача объекта (event, ev, e) в обработчик в качестве параметра. Этот (е) передается всегда автоматически

const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")
const input = document.getElementById("input")

// function onClickHandler(e) {
//     e.target.parentElement.parentElement.style.backgroundColor = "black"
//     e.target.parentElement.style.backgroundColor = "red"
//     e.target.style.backgroundColor = "green"
// }

function onClickHandler(e) {
    //console.log(e.currentTarget) //currentTarget - элемент, который вызвал обработчик в процессе всплытия собития
    //console.log(e.target) //target - элемент, который СГЕНЕРИРОВАЛ событие (первый получил клик)
    console.log(e.currentTarget.id) //это безопасный код, который игнорирует вложенности вниз по дереву.
    // currentTarget защищает наш код, когда в наш привязанный к клику элемент, вкладывают еще каких-то детей (дизайнеры добавили еще какую-то div'ку)
    // target же, в случае добавления еще одного child'a, будет равняться этому чалду
    // в итоге практикуй лучше currentTarget
    e.stopPropagation()
    // чтобы защититься от нежелательных активаций тех же onclick'ов в родителях,
    // если на ребенка кликнули, то нужно прописывать e.stopPropogation
    // stopPropagation() написанный в обработчике для какого-то элемента,
    // запрещает всплытие событие клика дальше в родителей. событие
    // выполняется только для того элемента, в котором прописан stopPropagation
    // Если stopPropagation указать в первом родителе, относительно самого первого
    // элемента, где тоже есть обработчик без stopPropagation, то событие всплывет до
    // родителя и вызовет сначала обработчик чилда, потом обработчик родителя и останавливается
    // Т.Е. нужно писать БЕЗОПАСНЫЙ код: ограничивать "падение кода" снизу currentTarget
    // и сверху stopPropagation
}

// sm.onclick = onClickHandler // один синтаксис (устаревший способ)
sm.addEventListener("click", onClickHandler) // другой синтаксис (лучше писать так)
md.onclick = onClickHandler
bg.onclick = () => alert("BIG!")










// input
// function onChangeHandler(ev) {
//     console.log(ev.target.value)
// }
//
// input.onchange = onChangeHandler



