// http module in NodeJS

const http = require("http");
const server = http.createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h3>Tanmay Patel</h3>");
    res.end();
  }).listen(8080, () => console.log("Server running on port 8080"));
