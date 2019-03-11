const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT_NUMBER || 3000

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});