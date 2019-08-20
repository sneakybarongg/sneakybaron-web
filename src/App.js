import React from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css';

import CustomNavbar from './components/CustomNavbar'
import MainPatchInfo from './components/MainPatchInfo'
import Footer from './components/Footer'
import { getCurrentPatch } from './utils.js'
import TeamfightTactics from './components/TeamfightTactics'


function App() {
  const currentPatch = getCurrentPatch();
  return (
    <div className="App text-light bg-dark">
      <CustomNavbar />
      <header className="App-header">
      </header>
      <div className="mt-5 container">
        <Route exact path="/" render={(props) => <MainPatchInfo patch={currentPatch} />} />
        <Route path="/tft/" render={(props) => <TeamfightTactics patch={currentPatch} />} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
