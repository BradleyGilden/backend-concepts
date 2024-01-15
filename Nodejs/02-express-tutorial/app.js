const express = require('express');
const path = require('path');
const app = express();


app.get('/', (req, res) => {
  res.json({ name: 'Bradley', surname: 'Gilden' })
});

app.all('*', (req, res) => {
  res.status(404).send('resource not found');
});

app.listen(5500, () => {
  console.log('server is listening on port 5500');
});
