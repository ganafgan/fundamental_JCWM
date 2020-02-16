const urutanAlphabet = (str='') => {

    var char = " abcdefghijklmnopqrstuvwxyz"
    // console.log(arrChar)
    var index = []

    

    for (let i = 0; i < str.length; i++) {
            if (!(str[i] >= 0)) {
                var hasil = char.indexOf(str[i].toLowerCase())
                if (hasil !== -1) {
                    index.push(hasil)
                }
            }
        
        }
        console.log(index.join(' '))
}

urutanAlphabet("The sunset sets at twelve o'clock")
// console.logurutanAlphabet("it's never too let to try")
// console.logurutanAlphabet("Have you done your homework ?")