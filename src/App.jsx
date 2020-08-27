import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'
import MainNavbar from './components/navbar/MainNavbar';
import HomePage from './components/pages/home/HomePage';
import MainFooter from './components/footer/MainFooter';
import PartaiPage from './components/pages/partai/PartaiPage';
import MultimediaPage from './components/pages/multimediaPage/MultimediaPage';
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
import BgRed from './components/bgRed/BgRed';
import WejanganBungKarno from './components/pages/bkbb/wejanganbungkarno/WejanganBungKarno';
import { useStoreActions } from 'easy-peasy';
import EventPage from './components/pages/events/EventPage';
import SiaranLangsung from './components/pages/siaranlangsung/SiaranLangsung';
import VideoDokumen from './components/pages/videodokumen/VideoDokumen';
import VideoTeaser from './components/pages/videoteaser/VideoTeaser';
import Wawancara from './components/pages/wawancara/Wawancara';


function App() {

  let [hide, setHide] = useState(true)
  let setBlogCategory = useStoreActions(action => action.setBlogCategory)

  useEffect(() => {
    setBlogCategory()
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

          <Route path='/wawancara'>
            <Wawancara />
          </Route>

          <Route path='/videoteaser'>
            <VideoTeaser />
          </Route>

          <Route path='/videodokumen'>
            <VideoDokumen />
          </Route>

          <Route path='/siaranlangsung'>
            <SiaranLangsung />
          </Route>

          <Route path='/event'>
            <EventPage />
          </Route>

          <Route path='/pemilu'>
            <PemiluPage />
          </Route>

          <Route path="/components">

          </Route>

          <Route path='/wejanganbungkarno'>
            <WejanganBungKarno />
          </Route>

          <Route path="/quotes">
            <BkbbWejangan />
          </Route>

          <Route path="/materipokok">
            <MateriPokok />
          </Route>

          <Route path="/videomedia">
            <VideoMedia />
          </Route>

          <Route path="/dpd">
            <Dpd />
          </Route>

          <Route path="/detailpengurus">
            <DetailPengurus />
          </Route>

          <Route path="/struktur">
            <StrukturPage />
          </Route>

          <Route path='/page2'>
            <Page2 />
          </Route>

          <Route path='/page1'>
            <Page1 />
          </Route>

          <Route path="/informasi">
            <InformasiPage />
          </Route>

          <Route path='/berita'>
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
            <PartaiPage />
          </Route>

          <Route path="/home">
            <HomePage />
          </Route>

          <Route path='*'>
            <HomePage />
          </Route>

        </Switch>

      </div>
      <BgRed />
      <MainFooter />
    </Router >
  );
}

export default App;
