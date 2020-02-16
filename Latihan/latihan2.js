const name = (str='',char='') => {

    newName = []
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes(char)){
            newName.push(str[i])
        }
        
    }
    console.log(newName)

}

name(['fikri','fendi','indri,','nana'],'na')
