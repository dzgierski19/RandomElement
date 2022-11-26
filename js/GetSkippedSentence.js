//DOTO
// 1. Zainstaluj node.js : https://nodejs.org/en/
// 2. Instaluje npm : zgoogluj
// 3. każde zadanie to oddzielny plik


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

