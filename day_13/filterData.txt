const filterData = (arr=[],str='') => {

    var kata = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == str) {
                kata.push(arr[i])
            }
            
        }
    }
    
    console.log(kata)
}    

filterData(['fikri','fendi','budi','andi'],'i')