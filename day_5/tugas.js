// fungsi ganjil genap


// function ganjilgenap(angka){
//     if (angka % 2 == 0)
//     console.log('gajil')
//     else{
//         console.log('genap')
//     }
//     return angka
// }

// console.log(ganjilgenap(7))

 
function ganjilgenap(angka){
    //perhitungan
    if(angka % 2 == 0){
        return(angka + ' adalah angka yg genap')
    }
    else{
        return(angka + ' adalah angaka yang ganjil')
    }
}
    //ouput
 console.log(ganjilgenap(10))
 console.log(ganjilgenap(9))
 console.log(ganjilgenap(3))
