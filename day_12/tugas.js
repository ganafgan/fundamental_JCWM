
const theMost = (kalimat='') => {
    
    var arrKata = []
    var arrJumlah = []
    var arrKalimat = kalimat.split('')

    for (let i = 0; i < arrKalimat.length; i++) {

        if (arrKata.includes(arrKalimat[i].toLowerCase())) {
            var index_ke = arrKata.indexOf(arrKalimat[i].toLowerCase())
            arrJumlah[index_ke] ++
        }else{
            arrKata.push(arrKalimat[i].toLowerCase())
            arrJumlah.push(1)
        }

    }
    var hasil = Math.max(...arrJumlah)
    var hurufTerbanyak = arrKata[arrJumlah.indexOf(hasil)]
    
    return `huruf terbanyak adalah ${hurufTerbanyak}`
}
console.log(theMost('xlphaaaaaa'))
console.log(theMost('fikriiiiii'))


const theUnique = (arrAngka='') => {
    
    var arrKata = []
    var arrJumlah = []
    var arrAngka
    for (let i = 0; i < arrAngka.length; i++) {

        if (arrKata.includes(arrAngka[i])) {
            var index_ke = arrKata.indexOf(arrAngka[i])
            arrJumlah[index_ke] ++
        }else{
            arrKata.push(arrAngka[i])
            arrJumlah.push(1)
        }

    }
    var hasil = Math.min(...arrJumlah)
    var angakaUnik = arrKata[arrJumlah.indexOf(hasil)]
    
    return `angka unik nya adalah ${angakaUnik}`
}
console.log(theUnique([1,1,1,1,3,1,1]))
console.log(theUnique([2,1,2,3,3,4,4]))


