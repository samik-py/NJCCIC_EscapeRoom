const { spawn } = require('child_process');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});