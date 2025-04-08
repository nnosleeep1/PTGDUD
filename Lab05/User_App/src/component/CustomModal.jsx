import React, { useState } from 'react';
import { Button, message, Modal } from 'antd';

const CustomModal = ({open,handleCancel,setData,data,fetchData}) => {
 
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [user, setUser] = useState({
    key:"",
    name: '',
    company: '',
    orderValue: '',
    orderDate: '',
    status: 'New',
  });
 

  const handleOk = async () => {
    setConfirmLoading(true);
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user), 
      });
  
      if (response.ok) {
        message.success('User added successfully!');
        await fetchData();
        handleCancel(); 
      } else {
        message.error('Failed to add user!');
      }
    } catch (error) {
      console.error(error);
      message.error('Something went wrong!');
    }
    setConfirmLoading(false);
  };
  return (
    <>
      
      <Modal
        title="Add new user"
        open={open}
        onCancel={handleCancel}
        footer={[
          <button
            key="cancel"
            onClick={handleCancel}
            className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>,
          <button
            key="submit"
            onClick={handleOk}
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 ml-5" 
          
          >
            Add User
          </button>,
        ]}
      >
       <div class="grid  grid-cols-2 gap-4">
          <div class="">User name:
            <input type="text" class="w-full border rounded px-3 py-1" placeholder="Enter name" onChange={(e) =>setUser(prev => ({ ...prev, name: e.target.value }))}/>
          </div>

          <div class="">Company:
            <input type="text" class="w-full border rounded px-3 py-1" placeholder="Enter Company" onChange={(e) =>setUser(prev => ({ ...prev, company: e.target.value }))} />  
          </div>
          <div class="">Order Value:
            <input type="text" class="w-full border rounded px-3 py-1" placeholder="Enter Order Value" onChange={(e) =>setUser(prev => ({ ...prev, orderValue: e.target.value }))}/>
          </div>
          <div class="">Order Date:
            <input type="date" class="w-full border rounded px-3 py-1" placeholder="Enter Order Date"onChange={(e) =>setUser(prev => ({ ...prev, orderDate: e.target.value }))} />
          </div>
          <div class=""> 
          <label class="block mb-1 font-medium">Status:</label>
          <select class="w-full border rounded px-3 py-1" onChange={(e) =>setUser(prev => ({ ...prev, status: e.target.value }))}>
            <option value="New">New</option>
            <option value="In-process">In-process</option>
            <option value="Completed">Completed</option>
          </select>
          </div>
       </div>
      </Modal>
    </>
  );
};
export default CustomModal;