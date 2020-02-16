const passwordStrengh = (str='') => {
    
    var num = `1234567890`
    var newNum = num.split('')
    var arrStr = str.split()
    console.log(arrStr)
    var text = ''

    // for (let i = 0; i < str.length; i++) {
    //     if (num.includes(str[i]) && str[i].toUpperCase()) {
    //         text = `strong password`
    //     }else{
    //         text = `too weak`
    //     }
        
    // }

    for (let i = 0; i < str.length; i++) {
        if (str.includes(num.charAt()) && str[i].toUpperCase) {
            text = `strong`
        }else{
            text = `weak`
        }
        
    }
    console.log(text)
    
}

passwordStrengh('fikriii')
// passwordStrengh('fikriiF12')
passwordStrengh('Afgan10')


