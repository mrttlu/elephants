import './App.css';
import { useEffect, useState } from 'react';
const axios = require('axios');

const elephantsUrl = 'http://localhost:4000/elephants';

function App() {
  const [elephants, setElephants] = useState(null);

  useEffect(() => {
    const getElephants = async () => {
      try {
        const elephantsResponse = await axios.get(elephantsUrl);
        const elephantsWithNames = elephantsResponse.data.elephants.filter((elephant) => elephant.name);
        const list = elephantsWithNames.map((elephant) => {
          if (elephant.name) {
            return <li key={elephant._id}>{elephant.name} <img src={elephant.image} alt="Vants"></img></li>
          }
          return null;
        });
        console.log(elephantsWithNames);
        setElephants(list);
      } catch (error) {
        console.log(error);
      }
    }
    getElephants();
  }, []);
  

  return (
    <div>
      <ul>
        {elephants}
      </ul>
    </div>
  );
}

export default App;
