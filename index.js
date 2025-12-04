import { createServer } from 'node:http';

const server = createServer((req, res) => {

  const url = req.url;
    const method = req.method;

    // --- Authentication Routes ---
    if (url === '/auth/login' && method === 'POST') {
        let body = '';
        
        // 1. Read the data sent in the request body (e.g., username and password)
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        // 2. Process the data when the request is fully received
        req.on('end', () => {
            console.log(`Received data for login: ${body}`);
            // In a real application, you would:
            // a) Parse the body (e.g., JSON.parse(body))
            // b) Validate the user credentials against a database
            // c) Create and send an authentication token (like a JWT)

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
});


server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

