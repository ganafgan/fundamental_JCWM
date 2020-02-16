// const concatMidle = (str='') => {
//     str = str.split(' ')
//     console.log(str)

//     for (let i = 0; i < str.length; i++) {
//         if (str[i].length % 2 == 0) {
//            var hasil = str[][str[i].length/2-1] + str[i].length/2
//         }else{
//             var hasil = Math.round(str[i].length/2)
//         }
        
//     }
//     console.log(hasil)
// }

// concatMidle('hello world')

const concatMidle = (str='') => {

    str = str.split(' ')
    console.log(str)
    var print = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i].length % 2 == 0 && str[i].length > 2) {
            var midle = str[i][str[i].length/2-1] + str[i][str[i].length/2]
            print += midle
        }if (str[i].length % 2 !== 0) {
            var midle = str[i][Math.floor(str[i].length/2)]
            print += midle
        }
    }
    console.log(print)
}
concatMidle('hello worldi')

