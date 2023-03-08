import './App.css';
import { useEffect, useState } from 'react';
import {loadEntries} from './content'
import PostitusteLoetelu from './PostitusteLoetelu';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Konteiner from './Konteiner';
import Kontakt from './Kontakt';
import Postitus from './Postitus'

function App() {
  const [andmed, setAndmed] = useState({
    postitused: [],
    error: ''
  })

  const laePostitused = (uuedPostitused) => {
    setAndmed((vanadAndmed) => {
      return { ...vanadAndmed, postitused: uuedPostitused}
    })
  }

  useEffect(() => {
    const laadimine = async () => {
      const tulemus = await loadEntries()
      console.log(tulemus.items[3].sys.contentType.sys.id)
      let postitused = tulemus.items.filter((element) => {
        return element.sys.contentType.sys.id === 'postitus'
      })

      postitused = postitused.map((element) => {
        return {...element.fields, loomine: element.sys.createdAt}
      })
      console.log(postitused)
      laePostitused(postitused)
    }
    laadimine()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Konteiner />} >
          <Route 
            index 
            element={<PostitusteLoetelu postitused={andmed.postitused} />} 
          />
          <Route path="kontakt" element={<Kontakt />} />
          <Route 
            path="/uudis/:uudis_id"  
            element={<Postitus postitused={andmed.postitused} />}
          />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
