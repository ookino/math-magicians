import React from 'react';
import Calculator from './components/calculator/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <Calculator />
      </section>
    );
  }
}

export default App;
