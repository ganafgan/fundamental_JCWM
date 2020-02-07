const middle =  (str='') => {

    if (str.length % 2 == 0) {
        // var hasil = str.charAt(str.length/2-1) + str.charAt(str.length/2)
        var hasil = str[str.length/2-1] + str[str.length/2]
        console.log(hasil)
    }else{
        // var hasil = str.charAt(str.length/2)
        var hasil = str[Math.floor(str.length/2)]
        console.log(hasil)
    }

}
middle('jijajo')