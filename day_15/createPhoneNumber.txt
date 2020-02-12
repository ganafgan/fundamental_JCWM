const createPhoneNumber = (arr=[]) => {

    arr1 = arr.slice(0,3).join('')
    arr2 = arr.slice(3,6).join('')
    arr3 = arr.slice(6,10).join('')

    console.log(`(${arr1}) ${arr2}-${arr3}`)
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
createPhoneNumber([4, 2, 4, 2, 1, 2, 3, 5, 7, 9])
