let numIfy = (arr=[]) => {
    arrSorted = arr.sort(function(a, b){return a - b})
    
    angka_genap = []
    angka_ganjil = []

        for (let i = 0; i < arrSorted.length; i++) {
            if (arrSorted[i] % 2 == 0) {
                angka_genap.push(arrSorted[i])
            }
            else{
                angka_ganjil.push(arrSorted[i])
            }
            
        }
        let max_genap = Math.max(...angka_genap)
        let max_ganjil = Math.max(...angka_ganjil)

        average_angka_genap = angka_genap.reduce(function(a,b){return a+b},0)/angka_genap.length
        sum_angka_ganjil = angka_ganjil.reduce(function(a,b){return a+b}) 
        
        console.log(`Angka genap = ${angka_genap}
Angka ganjil = ${angka_ganjil}
Max angka genap = ${max_genap}
Max angka ganjil = ${max_ganjil}
Avg angka genap = ${average_angka_genap}
Sum angka ganjil = ${sum_angka_ganjil}`)
        
        
}
numIfy([2,3,1,2,3,4,5,4])