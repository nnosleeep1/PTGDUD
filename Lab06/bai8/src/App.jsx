import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './AuthSlice';

function App() {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (name && email) {
      dispatch(login({ name, email }));
      setName('');
      setEmail('');
    }
  };

  if (isLoggedIn) {
    return (
      <div style={{ padding: 20 }}>
        <h2>👋 Xin chào, {user.name}!</h2>
        <p>Email: {user.email}</p>
        <button onClick={() => dispatch(logout())}>Đăng xuất</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2> Đăng nhập</h2>
      <input
        placeholder="Tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}

export default App