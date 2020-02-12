const filterData = (arr=[],str='') => {

    var kata = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(str)) {
            kata.push(arr[i])
        }
    }
    
    console.log(kata)
}    

filterData(['fikri','fendi','budi','andi'],'e')