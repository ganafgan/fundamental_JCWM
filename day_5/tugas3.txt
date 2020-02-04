
var plat_nomor
var tanggal 


function ceknopol(plat_nomor, tanggal) {
    
    plat_nomor = plat_nomor.substr(2, 1)

        if(plat_nomor % 2 == 0 && tanggal % 2 == 0){
            return('plat nomor anda genap = ' + plat_nomor + ' hari ini tanggal genap = ' + tanggal + ' anda boleh lewat' )
        }
    
        else if(plat_nomor % 2 != 0 && tanggal %2 != 0){
            return('plat nomor anda ganjil = ' + plat_nomor + ' hari ini tanggal ganjil = ' + tanggal + ' anda boleh lewat')
        }
        
        else{
            return('plat nomor anda ' + plat_nomor + ' hari ini tanggal = ' + tanggal + ' anda tidak boleh lewat' )
        }
        
    }
    
    console.log(ceknopol('D 2 UB',4))
    console.log(ceknopol('D 3 UB',6))
    console.log(ceknopol('D 7 UB',9))
    console.log(ceknopol('D 7 UB',9))