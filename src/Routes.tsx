import React from 'react';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Projects from './Components/Projects/Projects';
import Pricing from './Components/Pricing/Pricing';



function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/pricing" exact component={Pricing} />
        <Route path="/*" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
