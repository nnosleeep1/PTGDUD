import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './ThemeSlice';

function App() {
  

  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const isDark = mode === 'dark';

  const style = {
    padding: 20,
    backgroundColor: isDark ? '#222' : '#f9f9f9',
    color: isDark ? '#fff' : '#000',
    minHeight: '100vh',
    transition: 'all 0.3s',
  };

  return (
    <div style={style}>
      <h1> Toggle Theme</h1>
      <p>Chế độ hiện tại: <strong>{mode}</strong></p>
      <button onClick={() => dispatch(toggleTheme())}>
        Chuyển sang {isDark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default App