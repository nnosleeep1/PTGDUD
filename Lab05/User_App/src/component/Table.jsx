import React, { useEffect, useState } from 'react';
import { Table as AntTable, Tag, Radio, Divider } from 'antd';
import edit from "../assets/Lab_05/edit.png";
import file from "../assets/Lab_05/file.png"
import import1 from "../assets/Lab_05/import.png"
import export1 from "../assets/Lab_05/export.png"


const columns = [
  {
    title: 'CUSTOMER NAME',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'COMPANY',
    dataIndex: 'company',
    key: 'company',
  },
  {
    title: 'ORDER VALUE',
    dataIndex: 'orderValue',
    key: 'orderValue',
  },
  {
    title: 'ORDER DATE',
    dataIndex: 'orderDate',
    key: 'orderDate',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
    render: (text) => {
      let color = text.length > 5 ? 'geekblue' : 'green';
      if (text === 'Completed') {
        color = 'blue';
      } else if (text === 'In-process') {
        color = 'orange';
      } else if (text === 'New') {
        color = 'green';
      }
      return <Tag color={color}>{text.toUpperCase()}</Tag>;
    },
  },
  {
    title: 'ACTION',
    key: 'action',
    render: () => <img src={edit} alt="edit" style={{ width: 18, cursor: 'pointer' }} />,
  },
];


const CustomerTable = ({data,setData,fetchData}) => {
   const [open, setOpen] = useState(false);
      const showModal = () => {
          setOpen(true);
        };
        const handleCancel = () => {
          console.log('Clicked cancel button');
          setOpen(false);
        };
  return (
    <div>
        <div className="flex gap-5 mt-8 justify-between">
               <div className="flex gap-5 w-50 items-center">
                    <img src={file} alt="" />
                    <h1 className="font-bold text-xl">Detailed report</h1>
               </div>
               <div className="flex gap-2">
                    <button onClick={showModal} className="flex items-center gap-3 border-[#EB88AC] border-1 px-3 rounded hover:bg-[#f2d1dd] hover:text-white">
                        <img src={import1} alt="" className="w-[36px]"/>
                        <h1 className="text-[#EB88AC] font-bold hover:text-white">Import</h1>
                    </button>
                    <button className="flex items-center gap-3 border-[#EB88AC] border-1 px-3 rounded hover:bg-[#f2d1dd] hover:text-white">
                        <img src={export1} alt="" className="w-[30px] "/>
                        <h1 className="text-[#EB88AC] font-bold hover:text-white">Export</h1>
                    </button>
               </div>

            </div>
          
      <Divider />
      <AntTable
        rowSelection={{ type: 'checkbox' }}
        columns={columns}
        dataSource={data}
         className='border-2 rounded-2xl border-[#EDEDED]'
         pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default CustomerTable;
