// function removeFirstAndLastChar(string){
//     let hasil = ''
//     for (let i = 1; i < string.length - 1; i ++){
//       hasil += string[i] 
//     }
//     return hasil
//   }

//   console.log(removeFirstAndLastChar('afgan'))

// Remove First And Last Characther

let str = ''

function removeFirstAndLast(str) {
 return str.slice(1,-1)
}

console.log(removeFirstAndLast('afgan'))
console.log(removeFirstAndLast('giran'))
console.log(removeFirstAndLast('kresna'))
console.log(removeFirstAndLast('muslim'))