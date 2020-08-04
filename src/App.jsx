import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'
import MainNavbar from './components/navbar/MainNavbar';
import HomePage from './components/pages/home/HomePage';
import MainFooter from './components/footer/MainFooter';
import PartaiPage from './components/pages/partai/PartaiPage';
import MultimediaPage from './components/pages/multimedia/MultimediaPage';
import BkbbPage from './components/pages/bkbb/BkbbPage'
import BeritaPage from './components/pages/berita/BeritaPage';
import InformasiPage from './components/pages/informasi/InformasiPage';
import KetuaUmumPage from './components/pages/KetuaUmum/KetuaUmumPage';
import PemiluPage from './components/pages/Pemilu/PemiluPage';

function App() {
  return (
    <Router>
      <MainNavbar />
      <div className="App">

        <Switch>
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
