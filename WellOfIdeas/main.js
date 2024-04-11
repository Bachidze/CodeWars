const idea = (x) => {
    const Good = x.filter(idea => idea === 'good').length
    
    if (Good === 0) {
        return 'dafeilda'
    } else if (Good <= 2) {
        return 'warmatebuli'
    } else {
        return 'washla'
    }
}

console.log(idea(['good', 'bad', 'good'])) 
console.log(idea(['good', 'bad', 'good', 'bad', 'good'])) 
console.log(idea(['bad', 'bad', 'bad'])) 
