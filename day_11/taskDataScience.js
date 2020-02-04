
    let dataScienceTask = (input=[]) => {
      
        new_data = input

        //SORTING
        new_data.sort(function(a, b){return a - b})
    
        //SETENGAH DATA PERTAMA
        data_pertama = new_data.slice(0,6)
        console.log(data_pertama)

        //SETENGAH DATA KEDUA
        data_kedua = new_data.slice(6,12)
        console.log(data_kedua)

        // //Q1
        q1 = (data_pertama[2] + data_pertama[3]) / 2
        console.log(q1)

        //Q2
        q3 = (data_kedua[2] + data_kedua[3]) / 2
        console.log(q3)

        //iqr
        iqr = q3 - q1
        console.log(iqr)

        //LOWER LIMIT
        lower = q1 - 1.5 * iqr
        console.log(lower)

        //UPPER LIMIT
        upper = q3 - 1.5 * iqr
        console.log(upper)

        //DATA OUTLINER
        
        return new_data
    }
    console.log(dataScienceTask([71, 70, 73, 70, 70, 69, 70, 72, 71, 300, 71, 69]))

