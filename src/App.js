import React, { useState } from 'react';
import './App.css'
function App() {
  const [count, setCount] = useState();
  const [aValues, setAValues] = useState([]);
  const [bValues, setBValues] = useState([]);
  const [result, setResult] = useState([]);

  const handleCountChange = (event) => {
    setCount(event.target.value);
  }

  const handleAChange = (event, index) => {
    const values = [...aValues];
    values[index] = event.target.value;
    setAValues(values);
  }

  const handleBChange = (event, index) => {
    const values = [...bValues];
    values[index] = event.target.value;
    setBValues(values);
  }

  const handleCalculate = () => {
    const newResult = [];
    const newSum=[];
    let cgpa=0;
    let prosum=0;
    let sumb=0;
    for (let i = 0; i < count; i++) {
      const a = Number(aValues[i]);
      const b = Number(bValues[i]);
      prosum+=(a*b)
      sumb+=b
      newResult.push(prosum);
      newSum.push(sumb)
      
    }
    cgpa=parseFloat(newResult[count-1]/newSum[count-1])
    setResult(cgpa);
  }

  const renderInputs = () => {
    const inputs = [];
    for (let i = 0; i < count; i++) {
      inputs.push(
        <div className='inputAB' key={i}>
          <div className="inpA" key={i}>

          <label><h5>SGPA of {i+1}st semester :</h5></label>
          <input type="number" onChange={(event) => handleAChange(event, i)} />
          </div>
          <div className='inpB' key={i}>

          <label><h5>Credit of {i+1}st semester :</h5></label>
          <input type="number" onChange={(event) => handleBChange(event, i)} />
          </div>
        </div>
      )
    }
    return inputs;
  }


  const renderResult = () => {
    if (result.length === 0) {
      return null;
    }
    const rows = result
    return rows
  }
  
  return (
    <div className='container'>
      <label><h2> Enter your semester</h2></label>
      <input type="number" value={count} onChange={handleCountChange} />
      {renderInputs()}
      <button onClick={handleCalculate}>Calculate</button>
      <div className="result">
        {renderResult()}
        </div> 
      
    </div>
  );
}

export default App;
