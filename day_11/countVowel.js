const countVowel = (kalimat='') =>{
    let jumlah = 0
    for (let i = 0; i < kalimat.length; i++) {
        let char = kalimat[i].toLowerCase()
        if (char == 'a' || char == 'i' || char == 'u' || char == 'e' || char == 'o') {
            jumlah ++
        }
    }    
    return jumlah
}

console.log(countVowel('budi pergi ke pasar'))