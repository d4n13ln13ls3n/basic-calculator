import React from 'react';
import '../App.css';
class Display extends React.Component {
  render () {
    const { selectedNumber1, selectedNumber2, selectedOperation, result } = this.props;
    return (
      <div className="display">
        {/* {(!selectedNumber1 && !result) ? <span> 0 </span> : } */}
        { selectedNumber1 && <span className="display-text">{selectedNumber1}</span> }
        {/* <div>{`${selectedNumbers} ${selectedOperation} ${selectedNumber2} `}</div> */}
        { selectedOperation && <span className="display-text">{selectedOperation}</span> }
        {selectedNumber2 && <span className="display-text">{selectedNumber2}</span>}
        {result && <span className="display-text">{result}</span>}
        </div>
    )
  }
}
export default Display;