//DOTO
// 1. Zainstaluj node.js : https://nodejs.org/en/
// 2. Instaluje npm : zgoogluj
// 3. każde zadanie to oddzielny plik

// 1. arrow funtion
// 2. sprawić, żeby funkcja przyjmowała różne arraye
// 3. sprawić, żeby funkcja zwracała wszystkie możliwe elementy
// 4. staraj się używać arrow functions

const exampleArray = [0, 1, 2, 3, 4, 5];
const superDuperArray = ["stirng", 123, "dalsza część"]
const superDuperDuperArray = ["stirng", 123, "dalsza część", 345,345345,4567456]

const merged = [...exampleArray, ...superDuperArray, ...superDuperDuperArray]

console.log(merged)

const selectElement = () => {
    return merged[Math.floor(Math.random()*merged.length)]; // flor zwraca wartości z przedziału "<0;1)"
}

console.log(selectElement())

// 1. staraj się używać arrow functions
// 2. modulo -> podzielność, wielokrotnoscią 3, to jest też podzielne przez 3 bez reszty

const skipLettersInSentence = (sentence, skip) => {
    //sentece ---> "Kasia lub Basie" 
    sentence[0] = "B"
    //sentece ---> "Basia"
    const basia = sentence.slice(1) // asia
    console.log(basia[0]) // a


    // let
    // let skip = 2
    // return result
    console.log(sentence);
    console.log(skip);
}

skipLettersInSentence("moje zdanie", 2)

// const myFunction = () => {
//}



// console.log (sentence.slice(1,2))

