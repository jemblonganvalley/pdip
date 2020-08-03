import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom'
import MainNavbar from './components/navbar/MainNavbar';
import HomePage from './components/pages/home/HomePage';
import MainFooter from './components/footer/MainFooter';
import PartaiPage from './components/pages/partai/PartaiPage';
import BkbbPage from './components/pages/bkbb/BkbbPage';

function App() {
  return (
    <Router>
        <MainNavbar/>
      <div className="App">

            <Switch>

              <Route path='/bungkarno'>
                <BkbbPage />
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
