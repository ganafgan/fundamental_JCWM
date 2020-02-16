// const makeSquare = (col,row) => {

//     var hasil = ''
   

//     for (let i = 0; i < row; i++) {
//         var angka  = i+1
//         for (let j = 0; j < col; j++) {
//             hasil += angka + ''
//             angka += i+1
//         }
//         hasil += '\n'
//     }
// console.log(hasil)
// }
// makeSquare(2,3)
  

// const countIndex = (sentence='') => {

//     var alphabet = ' abcdefghijklmnopqrtsuvwxyz'
//     var sentence = sentence.replace(/[' ']/g,'')
//     var arrPosition = []

//         for (let i = 0; i < sentence.length; i++) {
//             var index = alphabet.indexOf(sentence[i].toLowerCase())
//             if (index !== -1) {
//                 arrPosition.push(index)
//             }
            
//         }

// console.log(arrPosition.join(' '))
// }
// countIndex('budi pergi ke pasar')

// var mobil =['avanxa','jeep','xenia','cary']
// var print = ''

// for (let i = 0; i < mobil.length; i++) {
//     print += (i+1) + '.' + mobil[i] + '\n'
// }

// console.log(print)

arrSiswa = ['muslim','vinda','kresna','afgan','tri','giran','fauzan']
var print = ''

    for (let i = 0; i < arrSiswa.length; i++) {
        print += arrSiswa[i] + ' setuju'+ '\n'
    }

    console.log(print)

