let alphaMove = (kalimat='',move=0) => {

    let total = 0
    let huruf = ' abcdefghijklmnopqrstuvwxyz'
    index_1 = []
    index_2 = []
    print = ''

    // for (let i = 0; i < kalimat.length; i++) {
    //     hasil += String.fromCharCode(kalimat.charCodeAt(i) + move)
        
    // }

    for (let i = 0; i < kalimat.length; i++) {
            var hasil = huruf.indexOf(kalimat[i])
            index_1.push(hasil)
        
    }

    for (let i = 0; i < index_1.length; i++) {
            index_2.push(index_1[i] + move)
        
    }

    for (let i = 0; i < index_2.length; i++) {
        print += huruf[index_2[i]]
        
    }

    console.log(index_1)
    console.log(index_2)
    console.log(print)
}

alphaMove('abc',1)
