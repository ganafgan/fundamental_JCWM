const DataScience = (data=[]) => {
    data.sort(function(a, b){return a-b})

if(data.length % 2 == 0){
    var median = data.length/2
    var median_1 = (data[median-1] + data[median])/2
    var set_data1= (data.slice(0,(median)))
    var set_data2 = (data.slice((median),data.length))
    if(set_data1.length % 2 == 0){
        var q1 = set_data1.length/2
        var q1_1 = (set_data1[q1-1]+ set_data1[q1])/2
        var q3 = set_data2.length/2
        var q3_1 = (set_data2[q3-1] + set_data2[q3])/2
    }
    else if(set_data1.length % 2 != 0){
        var q1 = (set_data1.length-1)/2
        var q1_1 = set_data1[q1]
        var q3 = (set_data2.length-1)/2
        var q3_1 = set_data2[q3]
    }
    
}

else if (data.length % 2 != 0){
    median = (data.length-1)/2
    median_1 = data[median]
    var set_data1= (data.slice(0,(median)))
    var set_data2 = (data.slice((median+1),data.length))
    if(set_data1.length % 2 == 0){
        var q1 = set_data1.length/2
        var q1_1 = (set_data1[q1-1]+ set_data1[q1])/2
        var q3 = set_data2.length/2
        var q3_1 = (set_data2[q3-1] + set_data2[q3])/2
    }
    else if(set_data1.length % 2 != 0){
        var q1 = (set_data1.length-1)/2
        var q1_1 = set_data1[q1]
        var q3 = (set_data2.length-1)/2
        var q3_1 = set_data2[q3]
    }

          
}

    var iqr = q3_1-q1_1
    var lowerLimit = q1_1-(1.5*iqr)
    var upperLimit = q3_1+(1.5*iqr)

    var nonOutlier = []
    for(i=0;i<data.length;i++){
        if(data[i] >= lowerLimit && data[i] <= upperLimit){
            nonOutlier.push(data[i])
        }
                   
    }



// console.log( `data setelah di sort = [ ${data} ]`)
// console.log("Median data " + median_1)
// console.log(`setengah data pertama = [${set_data1}]`)
// console.log(`setengah data terakhir =  [${set_data2}]`)
// console.log("q1 adalah = " + q1_1)
// console.log("q3 adalah = "+ q3_1)
// console.log("lower limit = " + lowerLimit)
// console.log("upper limit = " + upperLimit)
// console.log(`data yang tidak outlier = [${nonOutlier}]`)
console.log( `data setelah di sort = [ ${data} ]

Median data  ${median_1}

setengah data pertama = [${set_data1}]

setengah data terakhir =  [${set_data2}]

q1 adalah = ${q1_1}

q3 adalah = ${q3_1}

lower limit = ${lowerLimit}

upper limit = ${ upperLimit}

data yang tidak outlier = [${nonOutlier}]





`)





}

DataScience([71,70,73,70,70,69,70,72,71,300,71,69,68,68])