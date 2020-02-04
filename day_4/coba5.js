// var s = ''

//         for(var i = 1; 1 <= 5 ; i++){

//             for(var j = 4; j >= i; j--)
//             {
//                 for(var k = 1; k <= i; k++){
//                     s += '*'
//                 }
//                 s += '*'
//             }
//             s += '\n'
//         }
//         console.log(s)

// var segitiga = ''
// for (var i = 5; i  0 ; i++){
//     for(var j = 0; j < i; j++ ){
//         segitiga += '*'    
//     }
//     segitiga += '\n'
// }

// console.log(segitiga)

// var baris   = 1|2|3|4|5
// var spasi   = 5|4|3|2|1
// var bintang = 1|3|5|7|9

var bintang = 1
var print = ''

for(var i = 1 ; i < 6 ; i++){

    for(var j = 0 ; j <= 5-i ; j++){
        print += ' '
    }
        for (var k = 0 ; k < bintang ; k++){
            print += '*'

        }
    print += '\n'
    bintang += 2
}
console.log(print)

for(var i = 1 ; i < 6 ; i++){

    for(var j = 0 ; j <= 5 - i ; j++){
        print += ' '

        for(var k = 0 ; k < bintang ; k++){
            print += '*'

        }
    }
    print += 'n'
    bintang += 2
}