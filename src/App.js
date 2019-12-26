import React from 'react';
import Counter from './component/counter';
import About from './page/about';
import Home from './page/home';
import Counterd from './component/counter-class';
import Menu from './component/menu';
import Data from './component/data-diri';
import Makanan from './page/list-makanan';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component ={Home} />
        <Route path="/Counter" exact component ={Counter} />
        <Route path="/about"exact component ={About} />
        <Route path="/counterd"exact component ={Counterd} />
        <Route path="/menu"exact component ={Menu} />
        <Route path="/data"exact component ={Data} />
        <Route path="/makanan"exact component ={Makanan} />
      </Switch>
    </div>
  );
}

export default App;

