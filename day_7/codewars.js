/* square numbers */

// function squareSum(numbers){
//     hasil = 0
//     for(var i = 0 ; i < numbers.length ; i ++){
//         hasil += numbers[i] * numbers[i]
//     }
//         return hasil
// }  
// console.log(squareSum([1,2,2])) 


// function arrayPlusArray(arr1, arr2) {

//     arr1 = []
//     arr2 = []
    
//         for(var i =0 ; i < numbers.length ; i++){
//             hasil = arr1[i] + arr2[i]
//         }

//     return hasil; //something went wrong
//   }

//   console.log(arrayPlusArray([2],[3]))

/*Function superSize */

// function superSize(num){
//     num = parseInt(num.toString().split('').sort((a, b) => b - a).join(''))

//     return num
// }

// console.log(superSize(25789))

/* function the real floor */

// function getRealFloor(n) {
    
//     hasil = n > 13 ? n -2 : n > 0 ? n -1 : n
//     return hasil
    
// }

// console.log(getRealFloor(5))

// var n = ''
// function getRealFloor(n) {
    
/* Function getTheRealFloor */    

//     if (n > 13){
//         n = n -2
//     }
//     else if(n > 0){
//         n = n - 1
//     }
//     else{
//         n = n
//     }
//     return n
// }
// console.log(getRealFloor(-3))

/*Reverse The String*/
// function solution(str) {
//     return str.split('').reverse().join('')
// }

// function reverse(str){
//     let reversed = "";    
//     for (var i = str.length - 1; i >= 0; i--){        
//       reversed += str[i];
//     }    
//     return reversed;
//   }
// console.log(reverse('afgan'))

/* Array Plus Array */

// function arrayplusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((a, b) => a+b)
// }

// console.log(arrayplusArray([5,5], [2, 2]))


/* Convert number to reversed array of digits */


    // function digitize(n) {
    //     return n.toString().split('').map((x) => parseInt(x)).reverse()
    
    // }

    // function digitize(n) {
    //     return n.toString().split("").reverse().map(Number);
    //   }

    // function digitizer(n) {
    //     var initialArray = (''+n).split('');
    //     var reversedArray = [];
    //     for (var i = initialArray.length - 1; i >= 0; i--) {
    //       reversedArray[i] = initialArray.shift();
    //     }
    //     return reversedArray;
    //   }

/* Maps Function */
//     function maps(x) {
//         return x.map(item => item * 2)
//     }
// console.log(maps([1,2,3]))


/* Angka Jadi Masuk Ke Array */
// function monkeyCount(n) {
    
// var angka = []
//     for (var i = 1; i <= n ; i++){
//             angka.push(i)
//         }
//         return angka
//     }

//     console.log(monkeyCount(5))

/* Sum The String*/

// function sumStr(a,b) {
//     var angka = ''
//     angka +=  Number(a) + Number(b)
//     return angka
// }

/* Remove the space */

// function noSpace(x) {
//     return x.split(' ').join('')
// }
// console.log(noSpace('saya adalah afgan'))


var a = 1

while (a <10) {
    console.log(a)
    
    a++   
}