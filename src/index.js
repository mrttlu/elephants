const axios = require('axios');
const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

const port = 4000;
const elephantsUrl = 'https://elephant-api.herokuapp.com/elephants';

app.use(cors());

app.get('/elephants', async (req, res) => {
  try {
    const elephantsResponse = await axios.get(elephantsUrl);
    const data = JSON.stringify(elephantsResponse.data);
    fs.writeFileSync('elephants.json', data);
    res.status(200).json({
      elephants: elephantsResponse.data
    });
  } catch (error) {
    console.log(error);
  }

});

app.listen(port, () => {
  console.log('App is running');
});