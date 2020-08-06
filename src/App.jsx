import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'
import MainNavbar from './components/navbar/MainNavbar';
import HomePage from './components/pages/home/HomePage';
import MainFooter from './components/footer/MainFooter';
import PartaiPage from './components/pages/partai/PartaiPage';
import MultimediaPage from './components/pages/Multimedia/MultimediaPage';
import BkbbPage from './components/pages/bkbb/BkbbPage'
import InformasiPage from './components/pages/informasi/InformasiPage';
import PemiluPage from './components/pages/Pemilu/PemiluPage';
import { useState } from 'react';
import { useEffect } from 'react';
import BeritaPage from './components/pages/berita/BeritaPage';
import KetuaUmumPage from './components/pages/KetuaUmum/KetuaUmumPage';
import StrukturPage from './components/pages/struktur/StrukturPage';
import DetailPengurus from './components/pages/detailpengurus/DetailPengurus';
import Dpd from './components/dpd/Dpd';
import VideoMedia from './components/pages/videomedia/VideoMedia';
// import StrukturPage from './components/pages/partai/struktur/StrukturPage';

function App() {

  let [hide, setHide] = useState(true)

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.addEventListener('scroll', function () {
      var currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        setHide(true)
      } else {
        setHide(false)
      }
      prevScrollpos = currentScrollPos;
    })

  },[hide])

  return (
    <Router>

      <MainNavbar hide={hide} />

      <div className="App">

        <Switch>

          <Route path="/videomedia">
            <VideoMedia/>
          </Route>

          <Route path="/dpd">
            <Dpd/>
          </Route>

          <Route path="/detailpengurus">
            <DetailPengurus/>
          </Route>

          <Route path="/struktur">
            <StrukturPage/>
          </Route>

          <Route path="/pemilu">
            <PemiluPage />
          </Route>

          <Route path="/informasi">
            <InformasiPage />
          </Route>

          <Route path="/berita">
            <BeritaPage />
          </Route>

          <Route path="/multimedia">
            <MultimediaPage />
          </Route>

          <Route path="/ketuaumum">
            <KetuaUmumPage />
          </Route>

          <Route path="/bungkarno">
            <BkbbPage />
          </Route>

          <Route path="/partai">
            <PartaiPage/>
          </Route>

          <Route path="/">
            <HomePage />
          </Route>

        </Switch>

      </div>
      <MainFooter />
    </Router >
  );
}

export default App;
