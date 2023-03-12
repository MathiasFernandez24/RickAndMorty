import { NavVar } from './components/public/NavVar';
import { Main } from './components/public/Main';
import { Footer } from './components/public/Footer'
import { Route, Routes } from 'react-router-dom';
import Detail from './components/public/Detail';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("")

  const modificarSearch = (palabraSearch) => {
    setSearch(palabraSearch);
  };

  return (
    <div>
      <NavVar modificarSearch={modificarSearch} />
      <Routes>
        <Route exact path="/" element={<Main search={search} />} />
        <Route exact path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
      {/* <img src="https://w2g.tv/room/assets/1.8a80cf2b.png" data-w2g="['activeLogo', ['attr', 'src']]" alt="Active Provider"></img> */}
    </div>
  );
}

export default App;
