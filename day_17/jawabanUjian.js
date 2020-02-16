// const sumOdd = (num=0) =>{
//     num = String(num)
//     console.log(num)
//     print = 0

//     for (let i = 0; i < num.length; i++) {
//         print += Number(num[i++])
        
//     }
//     console.log(print)
// }

// sumOdd(540395)
// sumOdd(356083)
// sumOdd(123)


// const sumOnlyNum = (str='') => {

//     print = 0

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= 0) {
//             print += Number(str[i])
//         }
        
//     }
//     console.log(print)
// }

// sumOnlyNum('hello123')

// const spacify = (str='') => {

//     str = str.split('').join(' ')
//     console.log(str)
// }
// spacify('hello')
// spacify('iam student at purwadhika')

const concatMiddle = (str='') => {

    str = str.split(' ')
    console.log(str)
    var print = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i].length % 2 == 0 && str[i].length > 2) {
            var middle = str[i][str[i].length/2 - 1] += str[i][str[i].length/2]
            print += middle
        }
        
        else if (str[i].length % 2 !== 0) {
            var middle = str[i][Math.floor(str[i].length/2)]
            print += middle
        }
        
    }
    console.log(print)
}

concatMiddle('helloi worldi kamuy')
concatMiddle('budi go to the market') 












