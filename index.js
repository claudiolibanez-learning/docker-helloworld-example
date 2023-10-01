const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const ejs = require('ejs');

const server = http.createServer();
const port = 3000;

server.on('request', (req, res) => {
  if (req.url === '/') {
    const filePath = path.join(__dirname, 'index.ejs');
    const application = process.env.APPLICATION || 'Test Application';

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Erro interno do servidor: ${err}`);
      } else {
        const renderedHtml = ejs.render(data, { application });

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(renderedHtml);
        res.end();
      }
    });

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada');
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log("Ctrl + C to stop the server");
});
