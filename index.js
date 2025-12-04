import { createServer } from 'node:http';

const server = createServer((req, res) => {

  const url = req.url;
    const method = req.method;

    // --- Authentication Route ---
    if (url === '/auth/login' && method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            console.log(`Received data for login: ${body}`);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ 
                message: 'Login successful (Demo only)', 
                data: body 
            }));
        });
        return; 
    }

  if (req.url === '/') {
    // Route: / (Home Page)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Home Page!');
  }

  // aboute - route
  if(req.url === "/about"){
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello world!");
  }
});


server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

