import { useState } from 'react';
import './App.css';
import Myfunction from './components/AboutMe/About';

function App() {
  const [count, setCount]=useState(0)
  const countAdd=()=>{
    setCount(count+1)
  }
  return (
    <div className="App">
      <h2>{count}</h2>
      <Myfunction  countMethod={countAdd}/>
      
    </div>
  );
}

export default App;
