import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'
import MainNavbar from './components/navbar/MainNavbar';
import HomePage from './components/pages/home/HomePage';
import MainFooter from './components/footer/MainFooter';
import PartaiPage from './components/pages/partai/PartaiPage';
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
import Page1 from './components/pages/berita/page1/Page1';
import Page2 from './components/pages/berita/page2/Page2';
import MateriPokok from './components/pages/materipokok/MateriPokok';
import BkbbWejangan from './components/pages/bkbb/BkbbWejangan'
import AllComponent from './components/allcomponent/AllComponent';


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

  }, [hide])

  return (
    <Router>

      <MainNavbar hide={hide} />

      <div className="App">

        <Switch>

          <Route path="/components">

          </Route>

          <Route path="/quotes">
            <BkbbWejangan />
          </Route>

          <Route path="/materipokok">
            <MateriPokok />
          </Route>

          <Route path="/videomedia">

          </Route>

          <Route path="/dpd">

          </Route>

          <Route path="/detailpengurus">

          </Route>

          <Route path="/struktur">

          </Route>

          <Route path='/page2'>
            <Page2 />
          </Route>

          <Route path='/page1'>
            <Page1 />
          </Route>

          <Route path="/pemilu">
            <PemiluPage />
          </Route>

          <Route path="/informasi">

          </Route>

          <Route path="/berita">
            <BeritaPage />
          </Route>

          <Route path="/multimedia">

          </Route>

          <Route path="/ketuaumum">
            <KetuaUmumPage />
          </Route>

          <Route path="/bungkarno">
            <BkbbPage />
          </Route>

          <Route path="/partai">

          </Route>

          <Route path="/">

          </Route>

        </Switch>

      </div>
      <MainFooter />
    </Router >
  );
}

export default App;
