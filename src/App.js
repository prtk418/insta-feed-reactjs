import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Header from './components/headerComponent/Header';
import Body from './components/bodyComponent/Body';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
