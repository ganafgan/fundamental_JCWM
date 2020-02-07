const aplhaLoops = (str='') => {

    var hasil = ''

    for (let i = 0; i < str.length; i++) {
        hasil += str[i].toLocaleUpperCase()
        hasil += str[i].repeat(i)
    }

    return hasil
}

console.log(aplhaLoops('abcd'))
