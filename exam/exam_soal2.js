const findUniqChar = (str='') => {
        var huruf = []
        var jumlahHuruf = []
        var display = []
    
        for (let i = 0; i < str.length; i++) {
            if (huruf.includes(str[i])) {
                var index_huruf = huruf.indexOf(str[i])
                jumlahHuruf[index_huruf] ++
            }else
                huruf.push(str[i])
                jumlahHuruf.push(1)
        }

        
        for (let i = 0; i < jumlahHuruf.length; i++) {
            if (jumlahHuruf[i] == 1) {
                display.push(huruf[i])
            }
            
        }
        
        return display.join('')

    }

    console.log(findUniqChar('budi pergi ke pasar'))
    console.log(findUniqChar('fikri'))