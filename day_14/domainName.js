const domainName = (str='') => {

    str = str.replace('http://','')
    str = str.replace('https://','')
    str = str.replace('www.','')

    hasil =  str.split('.')[0]

    console.log(hasil)
}

domainName("http://github.com/carbonfive/raygun")
domainName("http://www.zombie-bites.com")
domainName("https://www.cnet.com")