function sumArray(arr){
    return arr.reduce((tot,curr) => tot + curr,0)
}

console.log(sumArray([1, 5.2, 4, 0, -1]))


function sumArrayWithForLoop(number){
    let sum = 0;
    for (let i = 0; i < number.length; i++){
        sum += number[i]
    }
    return sum
}

console.log(sumArrayWithForLoop([1, 5.2, 4, 0, -1]))