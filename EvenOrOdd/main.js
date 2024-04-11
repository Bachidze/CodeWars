function evenOrOdd(num) {
    for (let i = 0; i < num; i++) {
        if (i % 2 === 0) {
            console.log(i + " is Even");
        } else {
            console.log(i + " is Odd");
        }
    }
}

evenOrOdd(10);