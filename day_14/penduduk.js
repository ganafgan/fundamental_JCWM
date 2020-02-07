const jumlahPenduduk = (awal=0,persen=0,pendatang=0,target=0) => {

    // var n = 1000
    // var d = 50
    // var p = 5/100
    // var t = 1200

    // var penduduk = n
    // var tahun = 0

    // do{
    //     penduduk = penduduk + d + (p*penduduk)
    //     tahun ++

    // }while(penduduk < t)
    // console.log(tahun)
    
    var persen = 5/100
    
    var tahun = 0
    do{
        awal = awal + pendatang + (persen*awal)
        tahun ++
    }while(awal < target)

    console.log(awal)
    console.log(tahun)

}

jumlahPenduduk(1000, 5, 50, 1200)