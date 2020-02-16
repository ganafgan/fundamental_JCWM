const sumOdd = (num=0) => {

    num = String(num)
    hasil = 0

    // var result = Number(num[0]) + Number(num[2]) + Number(num[4])

    for (let i = 0; i < num.length; i++) {
        hasil += Number(num[i++])
    
    }
    console.log(hasil)
    // console.log(result)
}
sumOdd(540395)
sumOdd(356083)
sumOdd(123)

