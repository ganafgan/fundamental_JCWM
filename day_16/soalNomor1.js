const findSort = (str='') => {

    let arrStr = str.split(' ')
    let newArrStr = []

    for (let i = 0; i < arrStr.length; i++) {
        newArrStr.push(arrStr[i].length)
    }

    var result = newArrStr.sort(function(a,b){return a-b})
    
    console.log(`jumlah kata terpendak adalah ${result[0]}`)
}

findSort('Many people get up early in the morining')
findSort('Every office would getiing newest monitor')
findSort('Create new file after this morning')