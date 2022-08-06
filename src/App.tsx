import React from 'react';
import './stylesheets/App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home_anime';
import { MDBContainer } from 'mdb-react-ui-kit';
import AnimePage from './pages/anime_page';
import Navbar from './components/navbar';
import HomeManga from './pages/home_manga';
import MangaPage from './pages/manga_page';

function App() {
  return (
    <>
      <Navbar />
      <MDBContainer>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='manga' element={<HomeManga />} />
          <Route path='anime/:id' element={<AnimePage />} />
          <Route path='manga/:id' element={<MangaPage />} />
        </Routes>
      </MDBContainer>
    </>
  );

}

export default App;
