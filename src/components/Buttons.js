import React from 'react';
import '../App.css';
class Buttons extends React.Component {
  // handleClick = (event) => {
  //   const { selectedNumber } = this.props;
  //   const number = event.target.innerText;
  //     console.log('number:', number);
  //     this.setState({
  //       selectedNumber: number,
  //     });
  //     console.log('selected number:', selectedNumber);
  // }
  render () {
    const {  handleBack, handleNumbersClicked, handleOperationsClicked, handleClearEntry, handleClearAll, handleResults } = this.props;
    return (
      <div className="buttons">
        <div className="keys-1">
          <button onClick={handleClearAll} className="c">C</button>
          <button onClick={handleBack}>&larr;</button>
          <button onClick={handleClearEntry} className="ce">CE</button>
        </div>
        <div>
          <button onClick={handleNumbersClicked}>7</button>
          <button onClick={handleNumbersClicked}>8</button>
          <button onClick={handleNumbersClicked}>9</button>
          <button onClick={handleOperationsClicked}>/</button>
        </div>
        <div>
          <button onClick={handleNumbersClicked}>4</button>
          <button onClick={handleNumbersClicked}>5</button>
          <button onClick={handleNumbersClicked}>6</button>
          <button onClick={handleOperationsClicked}>x</button>
        </div >
        <div>
          <button onClick={handleNumbersClicked}>1</button>
          <button onClick={handleNumbersClicked}>2</button>
          <button onClick={handleNumbersClicked}>3</button>
          <button onClick={handleOperationsClicked}>-</button>
        </div>
        <div>
          <button onClick={handleNumbersClicked} className="zero">0</button>
          <button onClick={handleNumbersClicked}>.</button>
          <button onClick={handleResults}>=</button>
          <button onClick={handleOperationsClicked}>+</button>
        </div>
      </div>
    )
  }
}
export default Buttons;