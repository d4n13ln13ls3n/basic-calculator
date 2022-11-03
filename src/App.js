import React from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Display from './components/Display';

const OperationHandlers = {
  '+': (n1, n2) => n1 + n2,
  '-': (n1, n2) => n1 - n2,
  'x': (n1, n2) => n1 * n2,
  '/': (n1, n2) => n1 / n2,
};

class App extends React.Component {
  state = {
    selectedNumbers: [],
    selectedNumber1: [],
    selectedNumber2: [],
    selectedOperation: '',
    result: '',
  };
  handleNumberClicked = (event) => {
    const number = event.target.innerText;
    this.setState({
      selectedNumbers: [...this.state.selectedNumbers, number],
    });
    const { selectedNumber1, selectedOperation, selectedNumber2 } = this.state;
    if (selectedOperation) {
      this.setState({
        selectedNumber2: [...selectedNumber2, number].join(''),
      });
    } else {
      this.setState({
        selectedNumber1: [...selectedNumber1, number].join(''),
      });
    }
  };
  handleOperationClicked = (event) => {
    const operation = event.target.innerText;
    if (this.state.selectedNumbers.length !== 0) {
      this.setState({
        selectedOperation: operation,
        // selectedNumber1: this.state.selectedNumbers.join(''),
      });
    } else {
      return this.state;
    }
    if (this.state.selectedOperation) {
      this.handleResults();
      this.setState({
        selectedOperation: operation,
      });
      this.handleResults();
      this.setState({
        selectedOperation: operation,
      });
    };
  }

  handleClearEntry = (event) => {
    const { result, selectedNumber1, selectedNumber2, selectedOperation } = this.state;
    if (result.length) {
      this.setState({
        result: '',
      });
      return;
    }
    if (selectedNumber2.length) {
      this.setState({
        selectedNumber2: [],
        selectedNumber1,
      });
      return;
    }
    if (selectedOperation) {
      this.setState({
        selectedOperation: '',
      });
      return;
    }
    if (selectedNumber1.length && !selectedNumber2.length) {
      this.setState({
        selectedNumber1: [],
      });
      return;
    }
  };

  handleClearAll = (event) => {
    this.setState({
      selectedNumber1: [],
      selectedNumber2: [],
      selectedOperation: '',
      result: '',
    });
  };

  handleBack = (event) => {
    const { selectedNumber1, selectedNumber2, selectedOperation } = this.state;
    if (selectedNumber2.length) {
      this.setState({
        selectedNumber2: selectedNumber2.slice(0, -1),
      });
      return;
    }
    if (selectedOperation) {
      this.setState({
        selectedOperation: '',
      });
      return;
    } 
    if (selectedNumber1.length) {
      this.setState({
        selectedNumber1: selectedNumber1.slice(0, -1),
      });
      return;
    }
  }

  handleResults = () => {
      const { selectedNumber1, selectedNumber2, selectedOperation } = this.state;
      const operationHandler = OperationHandlers[selectedOperation];
      if (!selectedOperation) {
        throw new Error(`Invalid operation ${selectedOperation}`)
      }
      const result = (parseFloat(operationHandler(Number(selectedNumber1), Number(selectedNumber2)).toPrecision(12)));
      // const result = operationHandler(Number(selectedNumber1), Number(selectedNumber2));
      this.setState({
        selectedNumber1: [result],
        selectedNumber2: [],
        selectedOperation: '',
      });
    }
  render() {
    const {
      selectedNumbers,
      selectedNumber1,
      selectedNumber2,
      selectedOperation,
      result,
    } = this.state;
    console.log('sN1:', selectedNumber1);
    console.log('sN2:', selectedNumber2);

    return (
      <div className="App">
        <Display
          selectedNumbers={selectedNumbers}
          selectedNumber1={selectedNumber1}
          selectedNumber2={selectedNumber2}
          selectedOperation={selectedOperation}
          result={result}
          handleNumbersClicked={this.handleNumberClicked}
          handleOperationsClicked={this.handleOperationClicked}
          handleClearEntry={this.handleClearEntry}
          handleClearAll={this.handleClearAll}
          handleResults={this.handleResults}
          handleBack={this.handleBack}
        />
        <Buttons
          selectedNumbers={selectedNumbers}
          selectedNumber1={selectedNumber1}
          selectedNumber2={selectedNumber2}
          selectedOperation={selectedOperation}
          result={result}
          handleNumbersClicked={this.handleNumberClicked}
          handleOperationsClicked={this.handleOperationClicked}
          handleClearEntry={this.handleClearEntry}
          handleClearAll={this.handleClearAll}
          handleResults={this.handleResults}
          handleBack={this.handleBack}
        />
      </div>
    );
  }
}
export default App;