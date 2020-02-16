// const sameArray = (arr1=[],arr2=[]) => {

//     newArr = []
    
//     if (arr1.length !== arr2.length) {
//         console.log(`jumlah length nya tidak sama`)
//     }else{
//         for (let i = 0; i < arr1.length; i++) {
//             newArr.push(arr1[i])
//             newArr.push(arr2[i])         
//         }
//     }
//     return newArr

// }

// console.log(sameArray([1,2,3,4,5],['a','b','c','d','e']))

// const sumaryNum = (num=0) => {

//     var hasil = 0

//     for (let i = 0; i <= num; i++) {
//         hasil += i
//     }
    
//     console.log(hasil)
// }

// sumaryNum(4)


// const sequenceSum = (begin,end,step) => {

//     var hasil = 0

//     for (let i = begin; i <= end; i+=step){
//         hasil += i
       
//     }
//     console.log(hasil)
// }
// sequenceSum(2,6,2)
// sequenceSum(1,5,1)
// sequenceSum(2,2,2)

const sentence = (arr=[]) => {

    var good = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'good') {
            good ++
        }
        
    }
    if (good == 0) {
        hasil = 'Fail !!!'
    }else if (good > 2) {
        hasil = `I smell a series`
    }else{
        hasil = `Publish`
    }
    
    return hasil
}

console.log(sentence(['bad','bad','bad','bad']))
console.log(sentence(['bad','bad','bad','good']))
console.log(sentence(['bad','good','good','bad']))
console.log(sentence(['bad','good','bad','good','good']))

