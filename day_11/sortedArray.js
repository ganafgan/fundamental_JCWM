const sortedArray = (array = []) => {
    let new_array = []
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
              new_array.push(array[i][j])
              new_array = new_array.sort()
                
            }
            
        }
        return new_array
}

// console.log(sortedArray([[1,2,3],[6,5,4],[9,7,8]]))

const sortingArray = (arr=[]) => {

    let array_baru = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j< arr[i].length; j++) {      
        array_baru.push(arr[i][j])
        array_baru = array_baru.sort()
        }
    }
    return array_baru
}

console.log(sortingArray([[1,2,3],[6,5,4],[9,7,8]]))