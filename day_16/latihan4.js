const coba = (str='') => {

    var arrStr = str.split(' ')
    var arrJumlah = []
    console.log(arrStr)

    for (let i = 0; i < arrStr.length; i++) {
            arrJumlah.push(arrStr[i].length + arrJumlah[i])    
    }
    
    var arrJumlah = arrJumlah.sort(function(a,b){return a-b})
    var hasil = arrJumlah.values(arrStr)

    
    console.log(arrJumlah)
    console.log(hasil)
    
}

coba('budi pergi ke pasar')