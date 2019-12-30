import React from 'react';
import About from './page/about';
import Home from './page/home';
import Makanan from './page/list-makanan';
import Makana from './page/list-makanan-fast'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component ={Home} />
        <Route path="/about"exact component ={About} />
        <Route path="/makanan"exact component ={Makanan} />
        <Route path="/makana"exact component ={Makana} />
      </Switch>
    </div>
  );
}

export default App;

