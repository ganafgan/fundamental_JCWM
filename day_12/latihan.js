let sortingNama = (nama=[]) => {
    nama_baru = []

    for (let i = 0; i < nama.length; i++) {
        if (nama[i].length ==5 ) {
            nama_baru.push(nama[i])
        }
    }
    return nama_baru
}
// console.log(sortingNama(['ryan', 'afgan', 'tri']))


let findMinAndManx = (angka=[]) => {
    new_angka = angka.sort(function(a, b){return a-b})

    let max = new_angka.slice(-1)
    console.log(max)
    let min = new_angka.slice(0,1)
    console.log(min)

    return new_angka
}

// console.log(findMinAndManx([1,2,34,12,5,10]))

const ganjilGenap = (angka=[]) => {

    let angka_ganjil = []
    

    let angka_genap = []
   

    for (let i = 0; i < angka.length; i++) {
        if (angka[i] % 2 == 0) {
            angka_genap.push(angka[i])
        }else{
            angka_ganjil.push(angka[i])
        }
        
    }
    // console.log(angka_ganjil)
    // console.log(angka_genap)
    return 'angka ganjil = ' + angka_ganjil + '\nangka genap = '  + angka_genap 
}
console.log(ganjilGenap([2,3,1,3,4]))