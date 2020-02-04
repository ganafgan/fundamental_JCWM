// function removeVocal(string){
//     let hasil = ''
//     for(let i = 0; i < string.length; i++){
//       if('aiueoAIUEO'.indexOf(string[i]) < 0){
//         hasil += string[i]
//       }
//     }
//     return hasil
//   }

//   console.log(removeVocal('afgan taufiq hidayat'))

// Remove Huruf Vocal

let str = ''
function removeVocal(str) {
  return str.replace(/['aiueoAIUEO']/gi,'')
  
}

console.log(removeVocal('afgan taufiq hidayat'))
console.log(removeVocal('susi susanti'))
console.log(removeVocal('rahmat hidayat'))
console.log(removeVocal('aldiansyah surahmanto'))