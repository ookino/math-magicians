import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [object, setObject] = useState({
    total: 0,
    operation: '',
    next: '',
  });

  const handleClick = (event) => {
    setObject(calculate(object, event.target.value));
  };

  const { total, operation, next } = object;
  return (
    <section className="calculator">
      <input
        type="text"
        className="calculator__output calculator__padding"
        value={` ${
          total || operation || next
            ? `${total || ''} ${operation || ''} ${next || ''}`
            : '0'
        }`}
        disabled
      />
      <input
        value="AC"
        type="button"
        className="calculator__key calculator__padding"
        onClick={handleClick}
      />

      <input
        value="+/-"
        type="button"
        className="calculator__key calculator__key--operator calculator__padding"
        onClick={handleClick}
      />
      <input
        value="%"
        type="button"
        className="calculator__key calculator__key--operator calculator__padding"
        onClick={handleClick}
      />
      <input
        value="+"
        type="button"
        className="calculator__key calculator__key--operator calculator__padding"
        onClick={handleClick}
      />
      <input
        value="7"
        type="button"
        className="calculator__key calculator__padding"
        onClick={handleClick}
      />
      <input
        value="8"
        type="button"
        className="calculator__key calculator__padding"
        onClick={handleClick}
      />
      <input
        value="9"
        type="button"
        className="calculator__key calculator__padding"
        onClick={handleClick}
      />
      <input
        value="x"
        type="button"
        className="calculator__key calculator__key--operator calculator__padding"
        onClick={handleClick}
      />

      <input
        value="4"
        type="button"
        className="calculator__key calculator__padding"
        onClick={handleClick}
      />

      <input
        value="5"
        type="button"
        className="calculator__key calculator__padding"
        onClick={handleClick}
      />

      <input
        value="6"
        type="button"
        className="calculator__key calculator__padding"
        onClick={handleClick}
      />

      <input
        value="-"
        type="button"
        className="calculator__key calculator__key--operator calculator__padding"
        onClick={handleClick}
      />

      <input
        value="1"
        type="button"
        className="calculator__key calculator__padding"
        onClick={handleClick}
      />

      <input
        value="2"
        type="button"
        className="calculator__key calculator__padding"
        onClick={handleClick}
      />

      <input
        type="button"
        className="calculator__key calculator__padding"
        value="3"
        onClick={handleClick}
      />

      <input
        className="calculator__key calculator__key--operator calculator__padding"
        value="+"
        type="button"
        onClick={handleClick}
      />
      <input
        value="0"
        type="button"
        className="calculator__key calculator__key--zero calculator__padding"
        onClick={handleClick}
      />

      <input
        value="."
        type="button"
        className="calculator__key calculator__padding"
        onClick={handleClick}
      />

      <input
        value="="
        type="button"
        className="calculator__key calculator__key--operator calculator__padding"
        onClick={handleClick}
      />
    </section>
  );
};

export default Calculator;
