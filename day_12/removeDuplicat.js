// const removeDuplicates = (kata='') => {
//     new_kata = kata.split(' ')
//     let kata_baru = []
   
//     for (let i = 0; i < new_kata.length; i++) {
//        if (kata_baru.indexOf(new_kata[i]) === -1) { //catatan indexOf kalau sama/true -1 || indexOf kalau beda/false 0
//            kata_baru.push(new_kata[i])
//        }
        
//     }
//     return kata_baru
// }


const removeDupli = (str='') => {
    var arr = str.split(' ')
    var hasil = []
    for (let i = 0; i< arr.length; i++) {
      if (!(hasil.indexOf(arr[i]))) {
          hasil.push(arr[i])
      }
       
    }
    return hasil.join(' ')
}
console.log(removeDupli('alpha beta beta gamma gamma'))