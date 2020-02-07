const countPairs = (arr=[]) => {
    var sepatu = []
    var jumlah_sepatu = []

    for (let i = 0; i < arr.length; i++) {
        if (sepatu.includes(arr[i])) {
            var index_sepatu = sepatu.indexOf(arr[i])
            jumlah_sepatu[index_sepatu] ++
        }else{
            sepatu.push(arr[i])
            jumlah_sepatu.push(1)
        }
        
    }

    var hasil = 0
    for (let i = 0; i < jumlah_sepatu.length; i++) {
        hasil += Math.floor(jumlah_sepatu[i]/2)
    }

    // console.log(sepatu)
    // console.log(jumlah_sepatu)
    console.log(`Jumlah sepatunya ada ${hasil} pairs`)
}
countPairs(['red','red','green','blue','green'])