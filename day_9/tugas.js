// [SOAL  NOMOR 3]

function returnSum(num) {
    // num = String(num)
    let hasil = 0
    let index = ''
    for (let i = 1; i <= num; i++) {
         hasil += i
         index += i + '+'
    }
   return 'return '+ hasil + ' // ' + index + ' = ' + hasil
}

// console.log(returnSum(4))
// console.log(returnSum(3))
// console.log(returnSum(2))





// [SOAL  NOMOR 1]
function arraysTogether(array1, array2) {
   
    array_baru = []

    for (let i = 0; i < array1.length; i++) {
        array_baru.push(array1[i],array2[i]) 
    }
    return array_baru
}
// console.log(arraysTogether([1,2,3,4],['a','b','c','d']))





// [SOAL  NOMOR 4]
function ideas(array_ideas) {
    
    let good = 0
    for (let i = 0; i < array_ideas.length; i++) {
        if (array_ideas[i] == 'good' && ++good > 2) {
           return 'I smell a series'
        }    
    }
    return good ? 'Publis!' : 'Fail!'
}

// console.log(ideas(['bad', 'good', 'bad', 'bad']))






// [SOAL  NOMOR 5]
function sequence(angka1, angka2, angka3) {
    
    let hasil = 0
    let index = ''
    for (let i = angka1; i <= angka2; i+= angka3) {
            hasil += i
            index += i +'+'
        
    }
    return hasil + ' // ' + index + ' = ' + hasil
}

// console.log(sequence(2,6,2))
// console.log(sequence(1,5,1))



function FormatDuration(num) {
    let tahun = 0
    let bulan = 0
    let hari = 0
    let jam = 0
    let menit = 0

    tahun = Math.floor(num/(60 * 60 * 24 * 30 * 12))

    //bulan
    num = num % (60 * 60 * 24 * 30 * 12)
    bulan = Math.floor(num / (60 * 60 * 24 * 30))

    //hari
    num = num % (60 * 60 * 24 * 30)
    hari = Math.floor (num / (60 * 60 * 24))

    //jam
    num = num % (60 * 60 * 24)
    jam = Math.floor (num / (60 * 60))

    //menit
    num = num % (60 * 60)
    menit = Math.floor(num / 60)

    //detik
    num = num % 60

    return `${tahun} year(s) ${bulan} month(s) ${hari} day(s) ${jam} hour(s) ${menit} minute(s) ${num} second(s)`
}

// console.log(FormatDuration(123456789))