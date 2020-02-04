const countWord = (kalimat='') => {

    let arrKata = []
    let arrJumlahKata = []
    let arrayKalimat = kalimat.split(' ')

    for (let i = 0; i < arrayKalimat.length; i++) {
        
        if (arrKata.includes(arrayKalimat[i].toLowerCase())) {
            let index_ke = arrKata.indexOf(arrayKalimat[i].toLowerCase())
            arrJumlahKata[index_ke] ++
        }else{
            arrKata.push(arrayKalimat[i].toLowerCase())
            arrJumlahKata.push(1)
        }
        
        var text = ''
        for (let i = 0; i < arrKata.length; i++) {
            text += "Jumlah kata '" + arrKata[i].charAt(0).toUpperCase() + arrKata[i].slice(1, arrKata[i].length) + "' adalah " + arrJumlahKata[i] + '\n'
            
        }
    }
    console.log(text)
}

countWord('Nama saya adalah nama saya')
