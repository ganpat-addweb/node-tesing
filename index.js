const express = require('express');
const app = express();

app.get('/', function (req, res) {
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.send('Client IP: ' + clientIp);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on port: ' + PORT);
});
