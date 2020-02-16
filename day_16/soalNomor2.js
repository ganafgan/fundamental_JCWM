const persistence = (num=0) => {

    // var times = 0
    // var arr = num.toString().split('')
    // var hasil = ''

    // for (let i = 0; i < num.length; i++) {
    //         hasil = arr.reduce(function(a,b){return a*b})
    //         times ++     
            
    // }
    // console.log(hasil)
    // var arr = num.toString().split('')
    var times = 0
    num = num.toString()
    while (num.length > 1) {
        times++
        num = num.split('').map(Number).reduce(function(a,b){return a * b}).toString()
    }
    console.log(times)
}

persistence(39)
persistence(999)
persistence(4)


// var numbers = [4, 9, 16, 25]
// var x = numbers.map(numbers[0] * 10)

// console.log(x)
