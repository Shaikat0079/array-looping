const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const newColors = []
for(let i=colors.length-1;i>=0;i--){
    // console.log(colors[i])
    newColors.push(colors[i])
}
console.log(newColors)

const numbers = [12, 98, 5, 41, 23, 78, 46];

const even_numbers = [];

for (let i = 0; i<numbers.length;i++){
    if(numbers[i]%2===0){
        even_numbers.push(numbers[i]);
    }
}

console.log(even_numbers)

let TT = ['Tom', 'Tim', 'Tin', 'Tik']

console.log(TT.join(""));

const statement = 'I am a hard working person';

const strCopy = statement.split(" ");
console.log(strCopy)
const newStatementArray = [];
for(let i=strCopy.length-1; i>=0;i--){
    newStatementArray.push(strCopy[i]);
}

console.log(newStatementArray)
console.log(newStatementArray.join(" "))