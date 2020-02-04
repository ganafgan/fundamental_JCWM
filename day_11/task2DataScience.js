const sortData = (input=[]) => {

    input.sort(function(a, b){return a - b})

    if (input.length % 2 == 0) {
        var median = input.length / 2
        var median_1 = (input[median-1] + input[median]) / 2
        var set_data1 = (input.slice(0,(median)))
        var set_data2 = (input.slice((median),input.length))
        if (set_data1.length % 2 == 0) {
            var q1 = set_data1.length/2
            var q1_1 = (set_data1[q1-1] + set_data1[q1])/2
            var q3 = set_data2.length/2
            var q3_1 = (set_data2[q3-1] + set_data2[q3]) /2
        }
        else if (set_data1.length % 2 != 0) {
            var q1 = (set_data1.length - 1)/2
            var q1_1 = set_data1[q1]
            var q3 = (set_data2.length - 1)/2
            var q3_1 = set_data2[q3]
        }
    }

    else if (input.length % 2 != 0)
        var  median = (input.length - 1) /2
        var median_1 = input[median]
        var set_data1 = (input.slice(0,(median)))
        var set_data2 = (input.slice((median + 1),input.length))
        if (set_data1.length % 2 == 0) {
            var q1 = set_data1.length/2
            var q1_1 = (set_data1[q1-1] + set_data1[q1])/2
            var q3 = set_data2.length/2
            var q3_1 = (set_data2[q3-1] + set_data2[q3])/2
        }
        else if (set_data1.length % 2 != 0) {
            var q1 = (set_data1.length-1)/2
            var q1_1 = set_data1[q1]
            var q3 = (set_data2.length-1)/2
            var q3_1 = set_data2[q3]
        }
    var iqr = q3_1-q1_1
    var lowerLimit = q1_1-(1.5*iqr)
    var upperLimit = q3_1+(1.5*iqr)

    var nonOutlier = []

    for (var i = 0; i < input.length; i++) {
        if (input[i] >= lowerLimit && input[i] <= upperLimit) {
            nonOutlier.push(data[i])
        }
        
    }

    console.log (`data setelah di sort = [${input}]
    
    Median data = ${median_1}
    
    setengah data pertama = [${set_data1}]

    setengah data terakhir = [${set_data2}]

    q1 adalah = ${q1_1}

    q3 adalah = ${q3_1}

    lower Limit = ${lowerLimit}

    upper Limit = ${upperLimit}

    data yang tidak outlier = [${nonOutlier}]
    
    
    
    `)
}



sortData([71,70,73,70,70,69,70,72,71,300,71,69,68,68])