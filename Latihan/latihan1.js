const cariMedian = (kata='') => {

    var median = []

    if (kata.length % 2 == 0) {
    median.push(kata[kata.length/2 - 1]+kata[kata.length/2]) 
    }
    console.log(median.join())
}

cariMedian('kamu')