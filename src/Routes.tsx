import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects';
import Pricing from './Components/Pricing/Pricing';



class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route style={{ height: '100%' }} path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/pricing" exact component={Pricing} />
          <Route path="/*" component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
