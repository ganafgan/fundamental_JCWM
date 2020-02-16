const hitung = (num=0) => {

    num = String(num)
    hasil = []

    for (let i = 0; i < num.length; i++) {
        if (num[i] == 0) {
            
        }else{
            hasil.push(num[i])
        }
        
    }

    newHasil = hasil.join('') 
    newNum = Number(newHasil)
    console.log(newNum)
}
hitung(1324000)
hitung(1034000)