import './App.css';
import { useEffect } from 'react';
import {loadEntries} from './content'
import { BrowserRouter, Link, Switch, Route, Routes } from "react-router-dom";
import Kontakt from './Kontakt'
import Uudis from './Uudis'
import Esileht from './Esileht'
import Konteiner from './Konteiner';

function App() {

  useEffect(() => {
    const laadimine = async () => {
      const tulemus = await loadEntries()
      console.log(tulemus)
    }
    laadimine()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Konteiner />} >
          <Route index element={<Esileht />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/uudis/:uudis_id" element={<Uudis />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
