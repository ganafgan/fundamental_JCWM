const moveZero = (arr=[]) => {

    arr1 = []
    arr2 = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr1.push(arr[i])
        }else{
            arr2.push(arr[i])
        }
        
    }
    var hasil = arr1.concat(arr2)
    console.log(hasil)
    
}

moveZero([false, 1, 0, 1, 2, 0, 1, 3,'a'])
moveZero([1, 3, 4, 2, 0, 4 ,0, 1, 2, 0, 3])