// for (var j = 0; j < 3 ; j++){

//     for (var k = 0 ; k < 3 ; k++){

//         for (var l = 0 ; l < 3 ; l++){
//             console.log('======')
//         }
//         console.log('+++++')
//     }
//     console.log('****')
// }

// var j = 0
// while(j < 3){
//         var k = 0
//         while(k < 3){
//                 var i = 0
//                 while(i < 3){
//                     console.log('anak')
//                     i++
//                 }
//             console.log('bapak')
//             k++
//         }
//     console.log('kakek')
//     j++
// }

// var j = 0
// do{
//     var k = 0
//     do{
//         var i = 0
//         do{
//             console.log('anak')
//             i++
//         }while (i < 3)
//         console.log('bapak')
//         k++
//     }while(k < 3)
//     console.log('kakek')
//     j++
// }while(j < 3)

// penulisan dalam looping atau perulangan 

// initial value, condotion, exit way

// var bintang = ''
// var j = 5

// do{

//     var k = 0
//     do{

//         bintang += '*'
//         k ++
//     }while(j <= k)
//     bintang += '\n'
//     j ++
// }while (j > 5)

// console.log(bintang)

// segitiga = ''
// var j = 0

// do{
//     var k = 0
//     do{
//         segitiga += '*'
//         k ++
//     }while(j < k)
//     segitiga += '\n'
//     j --
// }while(j >= 1 )

// console.log(segitiga)

var bintang = ''

for (var j = 5 ; j > 0 ; j --){
    
    for (k = 0 ; k < j ; k ++){
        bintang += '*'
    }
    bintang += '\n'
}

console.log(bintang)