let alphaMove = (kalimat='',move=0) => {

    let hasil =''

    for (let i = 0; i < kalimat.length; i++) {
        hasil += String.fromCharCode(kalimat.charCodeAt(i) + move)
        
    }
    return hasil
}

console.log(alphaMove('abc',1))
console.log(alphaMove('abc',2))
console.log(alphaMove('aaa',5))