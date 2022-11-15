const exampleArray = [0, 1, 2, 3, 4, 5];

function selectElement(){
    return exampleArray[Math.floor(Math.random()*exampleArray.length)];
}

console.log(selectElement())
