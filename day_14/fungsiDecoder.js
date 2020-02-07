const fungsiDecoder = (str='') => {
    
    arrStr = str.split('wub')
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i] === '') {
            arrStr.splice(i,1)
        }
        
    }

    var hasil = arrStr.join(' ')
    console.log(hasil)
}

fungsiDecoder('wubwewubarewubthewubchampionwubmywubfriend')