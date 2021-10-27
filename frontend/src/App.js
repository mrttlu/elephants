const axios = require('axios');

const proxyUrl = 'http://localhost:4000/data';

function App() {
  const getData = async () => {
    try {
      const url = document.getElementById('urlInput').value;
      const response = await axios.post(proxyUrl, { url });
      const data = response.data;

      console.log(data.data);
      const wreckNames = data.data.map((wreck) => {
        return wreck.name;
      });
      console.log(wreckNames);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div>
      <input type="text" name="urlInput" id="urlInput"></input>
      <button id="sendQuery" onClick={ getData }>Saada päring</button>
    </div>
  );
}

export default App;
