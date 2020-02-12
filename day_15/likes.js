const likes = (str=[]) => {

    var text = ''

        if (str.length === 0) {
            text += `no one likes this`
        }
        else if (str.length === 1) {
            text += `${str[0]} likes this`
        }
        else if (str.length === 2) {
            text += `${str[0]} and ${str[1]} likes this`
        }
        else if (str.length === 3) {
            text += `${str[0]}, ${str[1]}, and ${str[2]} likes this `
        }
        else if (str.length > 3) {
            text += `${str[0]}, ${str[1]} and ${str.length-2} others likes this`
        }
    
    console.log(text)
}

likes([])
likes(['Peter'])
likes(['Jacob', 'Alex'])
likes(['Max','John', 'Mark'])
likes(['Alex', 'Jacob','Mark','Max', 'Jamie', 'Xavier', 'Michael'])