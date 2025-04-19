import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './CounterSlice';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
    <h1> Counter App</h1>
    <h2>Count: {count}</h2>
    <button onClick={() => dispatch(increment())}>Tăng</button>
    <button onClick={() => dispatch(decrement())} style={{ marginLeft: 10 }}>Giảm</button>
  </div>
  )
}

export default App
