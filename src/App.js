import { NavVar } from './components/public/NavVar';
import { Main } from './components/public/Main';
import { Route, Routes } from 'react-router-dom';
import Detail from './components/public/Detail';
import { useState } from 'react';
import { StaticContextProvider } from './context/StaticContext';
import Compare from './components/public/compare/Compare';

function App() {
  const [search, setSearch] = useState("")

  const modificarSearch = (palabraSearch) => {
    setSearch(palabraSearch);
  };

  return (
    <div>
      <StaticContextProvider>
        <NavVar modificarSearch={modificarSearch} />
        <Routes>
          <Route exact path="/" element={<Main search={search} />} />
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route exact path="/compare" element={<Compare />} />
        </Routes>
        {/* <Footer /> */}
      </StaticContextProvider>
      {/* <img src="https://w2g.tv/room/assets/1.8a80cf2b.png" data-w2g="['activeLogo', ['attr', 'src']]" alt="Active Provider"></img> */}
    </div>
  );
}

export default App;
