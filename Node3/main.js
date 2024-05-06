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


const server2 = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url);
    const path = parsedUrl.pathname;

    if (path === '/movie') {
        try {
            const response = await fetch('https://api.example.com/random/movie');
            if (response.ok) {
                const movie = await response.json();
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(movie));
            } else {
                throw new Error('Failed to fetch random movie');
            }
        } catch (error) {
         
            res.end('Internal Server Error');
        }
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
