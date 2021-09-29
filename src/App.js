import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/nav/Header';
import Home from './pages/home/Home';
import Calculator from './pages/calculator/Calculator';
import Quotes from './pages/quotes/Quotes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/quotes" component={Quotes} />
        </Switch>
      </Router>
    );
  }
}

export default App;
