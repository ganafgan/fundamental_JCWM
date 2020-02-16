const cariError = (arr1=[] , arr2=[]) => {

    var newArr = []
    var text = ''

    if (arr1.length !== arr2.length) {
        text = `panjang array tidak sama`
    }else{
        for (let i = 0; i < arr2.length; i++) {
                newArr.push(arr2[i] - arr1[i])
            
        }
    }

    var arrSum = newArr.reduce(function(a,b){return a+b})/newArr.length
    var arrPangkat = Math.pow(arrSum,2)

    console.log(arrSum)
    console.log(newArr)
    console.log(arrPangkat)
}

cariError([1,2,3],[4,5,6])