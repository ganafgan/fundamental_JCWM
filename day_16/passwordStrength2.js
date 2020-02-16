const passwordStrengh = (str='') => {

var adaAlpha = false
var adaUpper = false
var adaNumeric = false

    for (let i = 0; i < str.length; i++) {  
        if (!(str[i] >= 0)) {
            adaAlpha = true
            if (str[i] == str[i].toUpperCase()) {
                adaUpper = true
            }
        }
       if (str[i] >= 0) {
           adaNumeric = true
       } 
    }
    if (adaNumeric && adaAlpha && adaUpper) {
        return `Password Strong`
    }else{
        return `Password Wealk`
    }

}

console.log(passwordStrengh('fikriF123'))