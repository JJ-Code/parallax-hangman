import React, { useEffect } from 'react';
import Navbar from "./components/layouts/Navbar";
import HeaderParallax from "./components/header/HeaderParallax";
import GameTileBoard from "./components/middle/GameTileBoard";
import BottomParallax from "./components/bottom/BottomParallax";
import MessageModal from "./components/layouts/MessageModal";
import ClueModal from "./components/layouts/ClueModal";
import ResetModal from "./components/layouts/ResetModal";

import Footer from "./components/layouts/Footer";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Provider } from "react-redux";
import store from "./store";


import './App.css';



const App = (getNewWord) => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();

  });

  return (
    <div className="App">
      <Provider store={store}>
        
        <Navbar />
        <HeaderParallax />
        <MessageModal />
        <ClueModal />
        <ResetModal />
        <GameTileBoard />
        <BottomParallax />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
