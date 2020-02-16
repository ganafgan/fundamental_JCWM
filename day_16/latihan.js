const count = (str='') => {

    var huruf = 0
    var angka = 0
    var hasil = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] >=0 ) {
            angka ++
        }else{
            huruf ++
        }
        
    }
    hasil.push(huruf, angka)
    // hasil.push(angka)
console.log(`${huruf}`,`${angka}`.split())
console.log(hasil)

}
count('fikri123')