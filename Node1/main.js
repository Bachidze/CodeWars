/* Task1

const fs = require("fs/promises");

async function readBothfile() {
  try {
    await fs.writeFile("file1.txt", "giorgi")
    console.log("Warmatebit sheiqmna file1")

    await fs.writeFile("file2.txt", "bachidze")
    console.log("Warmatebit sheiqmna file2")

    const readFile1 = await fs.readFile('file1.txt','utf-8')
    console.log(readFile1)

    const readFile2 = await fs.readFile('file2.txt','utf-8')
    console.log(readFile2)
    console.log(`${readFile1} ${readFile2}`)
  } catch (er) {
    console.log(er, "errori");
  }
}

readBothfile();
 */

// Task2

/* const fs = require('fs/promises')

async function countWordLength(){
    
    await fs.writeFile('random.txt','girogi bachidze 20 wlis')
    console.log('warmatebit Sheiqmna Random file')

    const readRandomCreatedFile = await fs.readFile('random.txt','utf-8')
    console.log(readRandomCreatedFile)

    const randomTxtWordsLEngth = readRandomCreatedFile.split(' ').length
    console.log(randomTxtWordsLEngth)
}
countWordLength() */

// task3

const fs = require('fs/promises')

const users = [
    {
        name:'Giorgi',
        lastName:'Bachidze',
        age:20,
        isSmoker:false,
        from:'Geo'
    },
    {
        name:'Luka',
        lastName:'Axvlediani',
        age:10,
        isSmoker:true,
        from:'Geo'
    },
    {
        name:'nika',
        lastName:'razmadze',
        age:30,
        isSmoker:false,
        from:'Geo'
    },
    {
        name:'vaja',
        lastName:'Vajadze',
        age:12,
        isSmoker:false,
        from:'Geo'
    },
    {
        name:'vano',
        lastName:'Vanishvili',
        age:42,
        isSmoker:true,
        from:'Geo'
    },
]

async function filterByAge(){

    await fs.writeFile('data.json',`${JSON.stringify(users)}`)
    console.log('Warmatebit Sheiqmna Json File')

    const readJsonFile = await fs.readFile('data.json','utf-8')
    console.log(readJsonFile,'Json File')

    const parse = JSON.parse(readJsonFile)

    const filter = parse.filter(el => el.age > 18 )
    console.log(filter)
}

filterByAge()