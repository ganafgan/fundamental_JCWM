const jumlahHuruf = (kalimat='',karakter='') => {

    var jumlah = 0

    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] == karakter) {
            jumlah ++
            console.log(jumlah)
        }
        
    }
}

jumlahHuruf('nama saya adalah','a')