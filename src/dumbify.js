function dumbify(str){
    let ret = ''
    let lowercaseStr = str.toLowerCase()
    for(let i = 0; i < lowercaseStr.length; i++){
        if (randomBool())
            ret += lowercaseStr.charAt(i).toUpperCase()
        else
            ret += lowercaseStr.charAt(i)
    }
    return ret
}

function randomBool(){
    return(0 === Math.floor(Math.random() * 2))
}

module.exports = {dumbify}
