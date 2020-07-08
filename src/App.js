import React, {useState} from 'react';
import './App.css';
import {Set} from './setcolor';

function App() {
  let [count, setCount] = useState('A')
  let [backcolor, setColor] = useState(true)


  return (
    
    <div className={`App dbackground ${backcolor ? 'changebackground' : ''}`}>
      {/* <h1>COUNT = {count}</h1> */}
      <Set counter={count}/>
      <button 
      onClick={
        ()=>{setCount(String.fromCharCode(count.charCodeAt(0)+1))}}><strong>Next Character Count</strong>
      </button>
      <br />
      <br />
      <button onClick={
        ()=>{if(backcolor){setColor(false)}else{setColor(true)}}
      }><strong>Change Background Color</strong></button>
    </div>
  );
}

export default App;
