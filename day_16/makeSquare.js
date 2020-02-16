 const makeSquare = (col=0, row=0) => {
   
   var hasil = ''
   var angka = 1

      for (let i = 0; i < row ; i++) {
         for (let j = 0; j < col; j++) {
               hasil += angka + ' '
               angka ++
         }
         hasil += '\n'
      
      }
      console.log(hasil)
  }

  makeSquare(2,3)
  
  
  