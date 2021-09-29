import React from 'react';
import CalculatorApp from '../../components/calculator/Calculator';

const Calculator = () => (
  <section className="calculator-container container">
    <h1 className="calculator-header">Do Some Math!</h1>
    <div className="calculator-app">
      <CalculatorApp />
    </div>
  </section>
);

export default Calculator;
