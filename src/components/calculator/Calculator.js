import './Calculator.css';

const Calculator = () => (
  <section className="calculator">
    <input className="calculator__output calculator__padding" />
    <button type="button" className="calculator__key calculator__padding">
      AC
    </button>
    <button
      type="button"
      className="calculator__key calculator__key--operator calculator__padding"
    >
      +/-
    </button>
    <button
      type="button"
      className="calculator__key calculator__key--operator calculator__padding"
    >
      %
    </button>
    <button
      type="button"
      className="calculator__key calculator__key--operator calculator__padding"
    >
      +
    </button>
    <button type="button" className="calculator__key calculator__padding">
      7
    </button>
    <button type="button" className="calculator__key calculator__padding">
      8
    </button>
    <button type="button" className="calculator__key calculator__padding">
      9
    </button>
    <button
      type="button"
      className="calculator__key calculator__key--operator calculator__padding"
    >
      &times;
    </button>
    <button type="button" className="calculator__key calculator__padding">
      4
    </button>
    <button type="button" className="calculator__key calculator__padding">
      5
    </button>
    <button type="button" className="calculator__key calculator__padding">
      6
    </button>
    <button
      type="button"
      className="calculator__key calculator__key--operator calculator__padding"
    >
      -
    </button>
    <button type="button" className="calculator__key calculator__padding">
      1
    </button>
    <button type="button" className="calculator__key calculator__padding">
      2
    </button>
    <button type="button" className="calculator__key calculator__padding">
      3
    </button>
    <button
      type="button"
      className="calculator__key calculator__key--operator calculator__padding"
    >
      +
    </button>
    <button
      type="button"
      className="calculator__key calculator__key--zero calculator__padding"
    >
      0
    </button>
    <button type="button" className="calculator__key calculator__padding">
      .
    </button>
    <button
      type="button"
      className="calculator__key calculator__key--operator calculator__padding"
    >
      =
    </button>
  </section>
);

export default Calculator;
