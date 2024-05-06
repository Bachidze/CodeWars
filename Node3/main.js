/* const { print, readFile, writeFile } = require("./helpers");
const axios = require("axios");
async function main() {
  try {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = resp.data
    const mappedItem = data.map(({id,name,email,phone}) => ({id,name,email,phone}))

    await writeFile("data.json", mappedItem);
  } catch (error) {
    print(error, ":Error");
  }
}
main(); */

/* const http = require("http")
const url = require("url")
const { print, readFile, writeFile } = require("./helpers");

const server = http.createServer(async(req,res) => {
    const parsedURl = url.parse(req.url)
    const id = parsedURl.pathname.split('/')[2]
    const data = await readFile('data.json')

    if(parsedURl.pathname === '/api'){
        res.setHeader('content-type','application/json')
        res.write(data)
        const jsonData = JSON.parse(data)

        res.write(JSON.stringify(jsonData))

        return res.end()
    }else if(parsedURl.pathname.startsWith('/api/')){

        const user = JSON.parse(data).find(el => el.id === Number(id))
        res.write(JSON.stringify(user))
        return res.end()
    }else{
        return res.end('not found')
    }
})

server.listen('3000',() => {
    console.log(`server started on ${3000}`)
})
 */


const http = require("http");
const url = require("url");
const { print, readFile, writeFile } = require("./helpers");

// Task 1

/* const server1 = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url);
    const path = parsedUrl.pathname;

    if (path === '/html') {
        res.setHeader('Content-Type', 'text/html');
        res.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <div>
                <h1>Girogi Bachidze</h1>
                <h2>19 wlis</h2>
                <h3>programmer</h3>
            </div>
        </body>
        </html>`);
    } else if (path === '/api') {
        res.setHeader('Content-Type', 'application/json');
        const data = await readFile('data.json');
        res.end(data);
    } else if (path === '/time') {
        res.setHeader('Content-Type', 'text/plain');
        const isoTime = new Date().toISOString();
        res.end(isoTime);
    } else {
        res.end('Not Found');
    }
});

server1.listen(3000, () => {
    console.log('warmatebit gaeshva serveri');
}); */

// Task 2
const server2 = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const path = parsedUrl.pathname;

    if (path === '/movie') {
        const movie = {
            title: 'Random Movie',
            genre: 'Action',
            director: 'John Doe',
            year: '2024'
        };
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(movie));
    } else if (path === '/number') {
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        res.setHeader('Content-Type', 'text/plain');
        if (randomNumber === 111 || randomNumber === 222 || randomNumber === 333 ||
            randomNumber === 444 || randomNumber === 555 || randomNumber === 666 ||
            randomNumber === 777 || randomNumber === 888 || randomNumber === 999) {
            res.end('jackpot!!!!!!');
        } else {
            res.end(randomNumber.toString());
        }
    } else {
        res.end('Not Found');
    }
});

server2.listen(3000, () => {
    console.log('Server start 3000');
});
