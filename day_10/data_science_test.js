//COUNT THE VOWEL //
const countVowel = (kalimat='') =>{

    const vowel = ['a','i','u','e','o']

    let total = 0

    for (let i = 0; i < kalimat.length; i++) {
           if (vowel.includes(kalimat[i])) {
               total ++
           }    
    }
    return total
}

// console.log(countVowel('budi pergi ke pasar'))
// console.log(countVowel('purwadhika'))



//ASCENDING ORDER//

const ascendingOrder = (angka=[]) => {

    let new_array = [] 
    for (let i = 0; i < angka.length; i++) {
        // new_array.sort()
        new_array.push(angka[i])
        // new_array.sort((a, b) => a -b)
        }
        
    
    return new_array.sort((a, b) => a - b)
}
// console.log(ascendingOrder([[4,5,6],[7,8,9],[1,2,3]]))

//BELUM SELESAI//

let hitungvokal = (kalimat='') => {
    let jumlah_vokal = 0
    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] == 'a') {
            jumlah_vokal ++
        }
        
    }
    return jumlah_vokal
}

console.log(hitungvokal('saya adalah'))
