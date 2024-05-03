// task1

/* const fs = require('fs/promises')

async function main(){
    const dir = await fs.readdir('../Node2')
    dir.forEach(async el =>{
        const file = await fs.lstat(el)
        console.log(el,file)
        console.log(el,file.isFile())
    })
}

main() */


// task2

/* const fs = require('fs/promises')

async function main(){
    const directories = await fs.readdir('../Node2')
    directories.forEach(async el =>{
        if(el.startsWith('folder')){
           console.log(true)
        }else{
            console.log(false)
        }
    })
}

main()
 */

// task3

/*  const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === "/json") {
        res.setHeader("content-type", 'application/json')
        const obj = {
            name: 'giorgi bachidze',
            age: 21,
            book: ['ai ia', 'idioti', 'ana karenina']
        }
        res.end(JSON.stringify(obj))
    } 
})

server.listen(3000, 'localhost', () => {
    console.log('server started localhost 3000')
})

  */

// Task4

/* const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === "/iso") {
        const time = new Date().toISOString()
        res.end(time);
    } else {
        res.writeHead({ 'Content-Type': 'text/plain' })
        res.end('shecoma');
    }
})

server.listen(3000, 'localhost', () => {
    console.log('server started localhost 3000')
}) */



// Task 5

/* const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    if  (req.url === '/table') {
        res.setHeader('content-type','text/html')
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>html</title>
        </head>
        <body>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>giorgi</td>
                        <td>20</td>
                        <td>Geo</td>
                    </tr>
                    <tr>
                        <td>dato</td>
                        <td>22</td>
                        <td>Geo</td>
                    </tr>
                    <tr>
                        <td>nini</td>
                        <td>17</td>
                        <td>EGY</td>
                    </tr>
                    <tr>
                        <td>temura</td>
                        <td>11</td>
                        <td>Dusheti</td>
                    </tr>
                    <tr>
                        <td>lasha</td>
                        <td>32</td>
                        <td>GER</td>
                    </tr>
                </tbody>
            </table>
        </body>
        </html>        
        `
        res.end(html)
    } else {
        res.end('Shecdoma')
    }
})

server.listen(3000, 'localhost', () => {
    console.log('server started localhost 3000')
}) */
