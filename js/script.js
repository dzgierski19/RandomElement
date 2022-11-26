//DOTO
// 1. Zainstaluj node.js : https://nodejs.org/en/
// 2. Instaluje npm : zgoogluj
// 3. każde zadanie to oddzielny plik




// Jakie są inne rozwiązania Math.floor, Math.round, Math.ceil -> math.round
// typeof
// wywołać pustą tablicę, a potem dodać do validacji, żeby tablica nie była pusta

const exampleArray = [0, 1, 2, 3, 4, 5];
const superDuperArray = ["stirng", 123, "dalsza część"];
const superDuperDuperArray = ["stirng", 123, "dalsza część", 345,345345,4567456]
const emptyArray = []

const merged = [...exampleArray, ...superDuperArray, ...superDuperDuperArray]

console.log(merged)


const selectRandomEle = (array1)  => {
    //TODO zrobić validacje
    return array1[Math.round(Math.random()*array1.length)]; // flor zwraca wartości z przedziału "<0;1)"
}

console.log("emptyArray", selectRandomEle(emptyArray), typeof selectRandomEle(emptyArray))
console.log("exampleArray",selectRandomEle(exampleArray), typeof selectRandomEle(exampleArray))
console.log("superDuperDuperArray",selectRandomEle(superDuperDuperArray), typeof selectRandomEle(superDuperDuperArray))
console.log("Lubie placki",selectRandomEle("Lubie placki"))

const validateArray = (array1) => {
  if(array1.elements[].length == 0)
  {
    alert("Enter Value");  
    return false;
  } else
  return true;
}

console.log ('emptyArray', validateArray(emptyArray))



