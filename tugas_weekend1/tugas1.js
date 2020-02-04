// square every digit 

// let angka

// function squareEveryDigits(num){
//     num = String(num)
//     let hasil = ''
//     for(let i = 0; i < num.length; i++){
//       hasil += num[i] * num[i]
//     }
//     return hasil;
//   }

//   console.log(squareEveryDigits(224))

// function squarEveryDigit(num) {
    
//     return num * num
    
// }

function squareEveryDigits(number) {

    return +Array.from(number.toString(), x => x * x).join('')
    
}

console.log(squareEveryDigits(567))
console.log(squareEveryDigits(789))
console.log(squareEveryDigits(123))
console.log(squareEveryDigits(456))
