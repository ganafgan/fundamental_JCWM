const sumTwoSmallest = (angka=[]) => {
    
    angka = angka.sort(function(a,b){return a- b })

    hasil = angka[0] + angka[1]

    return hasil
}
console.log(sumTwoSmallest([3,4,2,4,2,3,4]))
console.log(sumTwoSmallest([3,2,1]))

