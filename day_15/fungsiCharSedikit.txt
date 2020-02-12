const characterSedikit = (str='') => {

    let arrStr = str.split(' ')
    let new_arrStr = []

    for (let i = 0; i < arrStr.length; i++) {
        new_arrStr.push(arrStr[i].length)
   }
    return new_arrStr.sort(function(a,b){return a-b})[0]

}

console.log(characterSedikit('saya jalan jalan ke bandung'))