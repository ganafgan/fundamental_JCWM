
    /* ROTATE BY TWO DIGITS [SOAL 1] */ 
    function rotate(numbers) {
        // numbers = String(numbers).split('')
        // return numbers[2] + numbers [3] + numbers[0] + numbers[1]
        numbers = String(numbers)
        if (numbers.length % 2 !== 0) {
            return 'panjang digit tidak boleh ganjil'
        }

        var temp = []
        for (let i = 0; i < numbers.length; i+=2) {
            temp.push(numbers[i] + numbers[i+1])
        }
        console.log('sebelum reverse = ' + temp)

        temp = temp.reverse()
        console.log('setelah di reverse = ' + temp)

        temp = temp.join('')
        console.log('setelah di join = ' + temp)

        return temp
    }
    // console.log(rotate(123456))



    /*AREA OFF THE CIRCLE [SOAL 2]*/ 
    function circle(a) {
        hasil = a * a
        luas = Math.PI * hasil
        return luas
    }
    // console.log(circle(12))
    


    /* MERGE TWO DIGITS NUMBERS [SOAL 3]*/
    function merge(angka1, angka2) {
    
        // angka1 = String(angka1).split('')
        // angka2 = String(angka2).split('')
        // return angka1[0] + angka2[0] + angka1[1] + angka2[1]
        angka1 = String(angka1)
        angka2 = String(angka2)
        var hasil = ''

        if (angka1.length !== angka2.length) {
            return 'jumlah digit angka tidak sama'
        }
        else{
            for (var i = 0 ; i < angka1.length ; i ++){
                hasil += angka1[i] + angka2[i]
            }

        }
        return hasil
    }
    
    // console.log(merge(44,98))



    /* REMOVE THE CHARACTER YOU "A" [SOAL 4]*/
    function removeCharacter(kata, huruf) {
        var hasil = ''
            for(var i = 0 ; i < kata.length ; i++){

                if (kata[i].toLowerCase() == huruf){
                    
                }

                else{
                    hasil += kata[i]
                }
           
    }
    return hasil
}
    // console.log(removeCharacter('saya siswa di sekolah smkn','s'))


    /*REVERSE THE STRING [SOAL 5]*/
    function reverseTheString(kalimat) {
        kalimat.split(' ').reverse().join(' ')

        // var kalimat = kalimat.split(' ')
        // kalimat = kalimat.reverse()
        // kalimat = kalimat.join(' ')

        return kalimat
    }
    console.log(reverseTheString('makan hati'))
