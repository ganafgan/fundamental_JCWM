const filterData = (kata=[],str='') => {

    hasil = []

    for (let i = 0; i < kata.length; i++) {
        if (kata[i].includes(str)) { //includes mengecek data false atau true
            hasil.push(kata[i])
        }
        
    }
    return hasil
}

// console.log(filterData(['fikri','fendi','budi','andi'],'f'))

    
const countPairs = (colors=[]) => {
    var item = []
    var countItem = []

    for (let i = 0; i < colors.length; i++) {
        if (item.includes(colors[i])) {
            var indexItem = item.indexOf(colors[i])
            countItem[indexItem] ++
        }else{
            item.push(colors[i])
            countItem.push(1)
        }
        
    }

    let pairs = 0
    for (let i = 0; i < countItem.length; i++) {
        var numberOfPairs = Math.floor(countItem[i]/2)
        pairs += numberOfPairs
    }
    console.log(item)
    console.log(countItem)
    console.log(pairs)
}

countPairs(['red','red','green','blue','green'])