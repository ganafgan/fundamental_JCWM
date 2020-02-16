const sumOnlyNum = (str='') => {
    str = str.split('')
    var huruf = 'abcdefghijklmnoqprstuvwxyz'.split('')
    hasil = 0
    angka = []

    for (let i = 0; i < str.length; i++) {
        if (huruf.includes(str[i])) {

        }else{
            angka.push(str[i])
        }
        
    }

    for (let i = 0; i < angka.length; i++) {
        hasil += Number(angka[i])    
    }
    
    console.log(hasil)
}

sumOnlyNum('hello123')
sumOnlyNum('ak1u4h')
sumOnlyNum('siap86')