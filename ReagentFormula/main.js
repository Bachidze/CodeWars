function formula(digit){
    if(digit.includes(1) && digit.includes(2)
    || digit.includes(2) && digit.includes(3))
    {
        return false
    }else {
        return true
    }
}

console.log(formula([5,6]))