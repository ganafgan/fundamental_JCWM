var angka1
var angka2
var angka3

    function angkabesar(angka1, angka2, angka3){
        
        if((angka1 > angka2) && (angka1 > angka3)){
               return(angka1 + ' adalah angka yang terbesar') 
        }
    
        else if ((angka2 > angka1) && (angka2 > angka3)){
                return(angka2 + ' adalah angka terbesar')
        }
    
        else if ((angka3 > angka1) && (angka3 > angka2)){
                return(angka3 + ' adalah angka terbesar')
        }
            
    }

    console.log(angkabesar(5,7,8))
    console.log(angkabesar(14,13,20))