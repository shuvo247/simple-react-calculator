import './App.css';
import React, { StrictMode, useState } from 'react';

function App() {
  const [number, numberValue] = useState(0);
  const clickedButton = (val) => {
    numberValue( () => {
      if (number == '0') {
        return val;
      }else{
        return number + val;
      }

    });
  }
  const clickedEqual = () => {
    var calculateNumber = eval(number);
    numberValue(calculateNumber);
  }

   return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="calculator">
            <div className='canvus'>
              {number}
            </div>
            <table>
              <tr>
                <td><button onClick={() => clickedButton('1')}>1</button></td>
                <td><button onClick={() => clickedButton('2')}>2</button></td>
                <td><button onClick={() => clickedButton('3')}>3</button></td>
                <td><button onClick={ () => numberValue('0') }>C</button></td>
              </tr>
              <tr>
                <td><button onClick={() => clickedButton('7')}>7</button></td>
                <td><button onClick={() => clickedButton('8')}>8</button></td>
                <td><button onClick={() => clickedButton('9')}>9</button></td>
                <td><button onClick={() => clickedButton('*')}>X</button></td>
              </tr>
              <tr>
                <td><button onClick={() => clickedButton('4')}>4</button></td>
                <td><button onClick={() => clickedButton('5')}>5</button></td>
                <td><button onClick={() => clickedButton('6')}>6</button></td>
                <td><button onClick={() => clickedButton('-')}>-</button></td>
              </tr>
              <tr>
                <td><button onClick={() => clickedButton('1')}>1</button></td>
                <td><button onClick={() => clickedButton('2')}>2</button></td>
                <td><button onClick={() => clickedButton('3')}>3</button></td>
                <td><button onClick={() => clickedButton('+')}>+</button></td>
              </tr>
              <tr>
                <td><button onClick={() => clickedButton('0')}>0</button></td>
                <td><button>.</button></td>
                <td><button onClick={() => clickedButton('/')}>/</button></td>
                <td><button onClick={ () => clickedEqual() }>=</button></td>
              </tr>
            </table>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;