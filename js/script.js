//DOTO
// 1. Zainstaluj node.js : https://nodejs.org/en/
// 2. Instaluje npm : zgoogluj
// 3. każde zadanie to oddzielny plik




// Jakie są inne rozwiązania Math.floor, Math.round, Math.ceil
// typeof
// wywołać pustą tablicę, a potem dodać do validacji, żeby tablica nie była pusta

const exampleArray = [0, 1, 2, 3, 4, 5];
const superDuperArray = ["stirng", 123, "dalsza część"];
const superDuperDuperArray = ["stirng", 123, "dalsza część", 345,345345,4567456]
const emptyArray = []

const merged = [...exampleArray, ...superDuperArray, ...superDuperDuperArray]

console.log(merged)

function selectSomething(array, myString, itd,){

}

const selectRandomEle = (array1)  => {
    //TODO zrobić validacje
    return array1[Math.round(Math.random()*array1.length)]; // flor zwraca wartości z przedziału "<0;1)"
}

console.log("emptyArray",selectRandomEle(emptyArray))
console.log("exampleArray",selectRandomEle(exampleArray))
console.log("Lubie placki",selectRandomEle("Lubie placki"))

