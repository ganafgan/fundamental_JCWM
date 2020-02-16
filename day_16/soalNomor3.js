const Multiplication = (col=0,row=0) => {

    // var angka1 = 1
    var text = ''

    for (let i = 1; i <= col ; i++) {
        for (let j = 1; j <= row; j++) {
            text += (j * i) + ' '
        }
        text += '\n'        
    }
    console.log(text)
}

Multiplication(3,3)
Multiplication(5,3)
Multiplication(3,5)