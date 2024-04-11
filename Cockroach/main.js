function cockroachSpeedCount(speed){
    return Math.floor(speed * 100000 / 3600)
}

console.log(cockroachSpeedCount(1.08))

