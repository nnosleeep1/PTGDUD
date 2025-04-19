import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './CartSlice';

function App() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const sampleProducts = [
    { id: 1, name: ' Táo', price: 10 },
    { id: 2, name: ' Chuối', price: 5 },
    { id: 3, name: ' Nho', price: 15 },
  ];
  return (
    <div style={{ padding: 20 }}>
      <h1> Giỏ hàng</h1>

      <h3> Sản phẩm:</h3>
      {sampleProducts.map((p) => (
        <button key={p.id} onClick={() => dispatch(addItem(p))} style={{ margin: 5 }}>
          Thêm {p.name} - {p.price}k
        </button>
      ))}

      <h3 style={{ marginTop: 20 }}> Trong giỏ:</h3>
      {cartItems.length === 0 && <p>Không có sản phẩm nào.</p>}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}k x
            <input
              type="number"
              value={item.quantity}
              min={1}
              onChange={(e) =>
                dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
              }
              style={{ width: 40, margin: '0 5px' }}
            />
            =
            <strong> {item.price * item.quantity}k</strong>
            <button
              onClick={() => dispatch(removeItem(item.id))}
              style={{ marginLeft: 10 }}
            >
              Xoá
            </button>
          </li>
        ))}
      </ul>

      <h3>Tổng số lượng: {totalQuantity}</h3>
      <h3>Tổng tiền: {totalPrice}k</h3>
    </div>
  );
}
export default App
