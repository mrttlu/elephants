const axios = require('axios');
const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

const port = 4000;

app.use(express.json());
app.use(cors());

app.post('/data', async (req, res) => {
  const { url } = req.body;
  console.log(url);
  try {
    const response = await axios.get(url);
    const data = response.data;
    res.status(200).json({
      data,
    });
  } catch (error) {
    console.log(error);
  }

});

app.listen(port, () => {
  console.log('App is running');
});