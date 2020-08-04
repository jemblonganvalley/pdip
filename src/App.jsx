import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom'
import MainNavbar from './components/navbar/MainNavbar';
import HomePage from './components/pages/home/HomePage';
import MainFooter from './components/footer/MainFooter';
import PartaiPage from './components/pages/partai/PartaiPage';
import MultimediaPage from './components/pages/multimedia/MultimediaPage';
import BeritaPage from './components/pages/berita/BeritaPage';
import InformasiPage from './components/pages/informasi/InformasiPage';

function App() {
  return (
    <Router>
        <MainNavbar/>
      <div className="App">
        
            <Switch>

            <Route path="/informasi">
                <InformasiPage/>
              </Route>

              <Route path="/berita">
                <BeritaPage/>
              </Route>

              <Route path="/multimedia">
                <MultimediaPage/>
              </Route>

              <Route path="/ketuaumum">
              </Route>

              <Route path="/bungkarno">
              </Route>

              <Route path="/partai">
                <PartaiPage/>
              </Route>

              <Route path="/">
                <HomePage/>
              </Route>
            </Switch>
      </div>
        <MainFooter/>
    </Router>
  );
}

export default App;
