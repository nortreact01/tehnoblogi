import './App.css';
import { useEffect } from 'react';
import {loadEntries} from './content'

function App() {

  useEffect(() => {
    const laadimine = async () => {
      const tulemus = await loadEntries()
      console.log(tulemus)
    }
    laadimine()
  }, [])

  return (
    <div className="Konteiner">
      <h1>Siia tuleb uudiste blogi</h1>
    </div>
  );
}

export default App;
