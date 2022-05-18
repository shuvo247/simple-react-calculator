import './App.css';
import React, { useState } from 'react';

function App() {
  const [preOperator, setPreOperator] = useState(0);
  const [postOperator, setPostOperator] = useState(0);
  const [operator, setOperator] = useState(0);
  const [result, finalResult] = useState(0);
  const updateResult = () => {
    finalResult( () => {
      switch (operator) {
        case '+':
          return preOperator + postOperator;
        case '-':
          return preOperator - postOperator;
        case '*':
          return preOperator * postOperator;
        case '/':
          return preOperator / postOperator;
        default:
          return preOperator;
      }
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <div class="calculator">
            {operator !== 0 ? (
                <input type="text" id="input" value={ preOperator + operator + postOperator } />
              ) : (
                <input type="text" id="input" value={ preOperator } />
              )  }
            <input type="text" id="input" value={ result } />
            <table>
              <tr>
                <td><button onClick={ () => (operator !== 0) ? setPostOperator(postOperator*10 + 1) : setPreOperator(preOperator*10 + 1) }>1</button></td>
                <td><button onClick={ () => (operator !== 0) ? setPostOperator(postOperator*10 + 2) : setPreOperator(preOperator*10 + 2) }>2</button></td>
                <td><button onClick={ () => (operator !== 0) ? setPostOperator(postOperator*10 + 3) : setPreOperator(preOperator*10 + 3) }>3</button></td>
                <td><button>C</button></td>
              </tr>
              <tr>
                <td><button onClick={ () => (operator !== 0) ? setPostOperator(postOperator*10 + 7) : setPreOperator(preOperator*10 + 7) }>7</button></td>
                <td><button onClick={ () => (operator !== 0) ? setPostOperator(postOperator*10 + 8) : setPreOperator(preOperator*10 + 8) }>8</button></td>
                <td><button onClick={ () => (operator !== 0) ? setPostOperator(postOperator*10 + 9) : setPreOperator(preOperator*10 + 9) }>9</button></td>
                <td><button onClick={ () => setOperator('*')}>X</button></td>
              </tr>
              <tr>
                <td><button onClick={ () => (operator !== 0) ? setPostOperator(postOperator*10 + 4) : setPreOperator(preOperator*10 + 4) }>4</button></td>
                <td><button onClick={ () => (operator !== 0) ? setPostOperator(postOperator*10 + 5) : setPreOperator(preOperator*10 + 5) }>5</button></td>
                <td><button onClick={ () => (operator !== 0) ? setPostOperator(postOperator*10 + 6) : setPreOperator(preOperator*10 + 6) }>6</button></td>
                <td><button onClick={ () => setOperator('-')}>-</button></td>
              </tr>
              <tr>
                <td><button onClick={ () => (operator !== 0) ? setPostOperator(postOperator*10 + 1) : setPreOperator(preOperator*10 + 1) }>1</button></td>
                <td><button onClick={ () => (operator !== 0) ? setPostOperator(postOperator*10 + 2) : setPreOperator(preOperator*10 + 2) }>2</button></td>
                <td><button onClick={ () => (operator !== 0) ? setPostOperator(postOperator*10 + 3) : setPreOperator(preOperator*10 + 3) }>3</button></td>
                <td><button onClick={ () => setOperator('+')}>+</button></td>
              </tr>
              <tr>
                <td><button onClick={ () => (operator !== 0) ? setPostOperator(postOperator*10 + 0) : setPreOperator(preOperator*10 + 0) }>0</button></td>
                <td><button onClick={ () => setOperator('*')}>.</button></td>
                <td><button onClick={ () => setOperator('/')}>/</button></td>
                <td><button onClick={ () => updateResult() }>=</button></td>
              </tr>
            </table>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
