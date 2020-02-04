const formatDuratin = (input=0) => {

    //catatan 1 tahun = 31506000 detik

    let tahun = Math.floor (input /(365 * 24 * 3600))
    let sisa_tahun = input % 31536000
    let hari = Math.floor(sisa_tahun / (24 * 3600)
    let sisa_hari = sisa_tahun % (24 * 3600)   
    let jam = Math.floor (sisa hari / 3600)
    let sisa_jam = sisa_hari % 3600
    let menit = Math.floor(sisa_jam / 60)
    let detik = sisa_jam % 60

    let text =''
    text += input + ' = '

    //TAHUN
    if (tahun > 0) {
        text += tahun + 'year'
        if (tahun > 1) {
            text += 's'
        }
        text += ' , '
    }

    //HARI
    if (hari > 0) {
        text += hari + 'day'
        if (hari > 1) {
            text += 's'
        }
        text += ' , '
    }

    //JAM
    if (jam > 0) {
        text += jam + ' hour'
        if (jam > 1) {
            text += 's'
        }
        text += ' , '
    }   

    //MENIT
    if (menit > 0) {
        text += menit + 'minute'
        if (menit > 1) {
            text += 's'
        }
        text += ' , '
    }

    //DETIK
}
