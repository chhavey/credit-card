import React, { useState } from 'react';
import './App.css';
import Card from './components/Card/Card.js';
import Form from './components/Form/Form.js';


function App() {
  const [name, setName] = useState('Jane Appleseed');
  const [number, setNumber] = useState('0000 0000 000 000');
  const [month, setMonth] = useState('00');
  const [year, setYear] = useState('00');
  const [cvc, setCvc] = useState('000');

  const handleFormChange = (props) => {
    setName(props.name);
    setNumber(props.number);
    setMonth(props.month);
    setYear(props.year);
    setCvc(props.cvc);
  };
  return (
    <div className="App">
      <div className='Card'>
        <Card
          name={name}
          number={number}
          month={month}
          year={year}
          cvc={cvc}
        />
      </div>
      <div className='Form'>
        <Form onFormChange={handleFormChange} />
      </div>
    </div>
  );
}

export default App;
