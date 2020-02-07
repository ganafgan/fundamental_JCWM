let alphaSum = (kalimat='') => {

    // let hasil = 0
    // for (let i = 0; i < kalimat.length; i++) {

    //     hasil += kalimat.charCodeAt(i) - 96
    //    }
    //    return hasil

    let hasil = 0
    let huruf = ' abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < kalimat.length; i++) {
        hasil += huruf.indexOf(kalimat[i])
        
    }
    return hasil
}
console.log(alphaSum('acd'))
   

