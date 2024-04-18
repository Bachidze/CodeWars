// Task1


/* const obj = {
    name:'giorgi',
    age:20
}

function Arr(obj){
    return Object.entries(obj)
}

console.log(Arr(obj)) */


// Task 2

/* const obj1 = {
    name: 'luka',
    age: 20,
    isSmoker: false
};

const obj2 = {
    name: 'manana',
    age: 20,
    isSmoker: true
};

function CheckSameKey(obj1, obj2) {
    const keys1 = Object.keys(obj1).sort();
    const keys2 = Object.keys(obj2).sort();
    return JSON.stringify(keys1) === JSON.stringify(keys2);
}

console.log(CheckSameKey(obj1, obj2)) */

// Task 3

/* const obj = {}

const obj1 = {
    name: 'temuraa',
    age: 17
};

const obj2 = {
    city: 'Tbilisi',
    country: 'Geo'
};

const obj3 = {
    hobby: 'nothing'
};

Object.assign(obj, obj1, obj2, obj3)

console.log(obj)
 */

// Task 4

/* const obj = {
    city: 'Tbilisi',
    country: 'Geo',
    country: 'Geo',
}

function deleteKey(obj, deleteSameKey) {
    const newObj = { ...obj }
    delete newObj[deleteSameKey]
    return newObj
}

console.log(deleteKey(obj)) */

// Task 5 

/* class CarModel {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
}

const NewCarModel = new CarModel('Toyota', 'Camry', 2022)

console.log(NewCarModel.make)
console.log(NewCarModel.model)
console.log(NewCarModel.year) */


// Task 6

/* class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }

    getSquare() {
        return this.width === this.height;
    }
}

const myRectangle = new Rectangle(5, 5)

console.log(myRectangle.getArea())
console.log(myRectangle.getPerimeter())
console.log(myRectangle.getSquare())
 */

