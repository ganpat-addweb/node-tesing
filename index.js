const express = require('express');
const app = express();

app.get('/', function (req, res) {
  console.log("🚀 -> 🌏 ~ file: index.js:5 ~ req:", req)
  console.log("🚀 -> 🌏 ~ file: index.js:6 ~ req.socket.remoteAddress:", req.socket.remoteAddress)
  console.log("🚀 -> 🌏 ~ file: index.js:7 ~ req.ip:", req.ip)
  res.send('your IP is: ' + req.ip,req.socket.remoteAddress,req.ip);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('server running on port: ' + PORT);
});
   