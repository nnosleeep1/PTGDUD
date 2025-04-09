import { useEffect, useState } from "react";
import Body from "../component/Body"
import Header from "../component/Header"
import Menu from "../component/Menu"

const Home=()=>{
    const [data, setData] = useState([]);
     const fetchData= async  ()=>{
        try {
            const response = await fetch('http://localhost:3000/users');
            const result = await response.json();
            const formatted = result.map((item, index) => ({
              ...item,
              key: item.id || item.key || index.toString(),
            }));
            setData(formatted);
          } catch (err) {
            console.error('Error fetching data:', err);
          }
        };
     useEffect(() => {
        fetchData();
       
      }, []);
      useEffect(() => {
        console.log("data "+ JSON.stringify(data, null, 2))
       
      }, [data]);
     
    return(
       <div className="flex pl-10 pr-10">
           <div><Menu/></div>
            <div className="w-full px-5">
                <Header/>
                 <Body data={data} setData={setData} fetchData={fetchData}/>
            </div>
            <div></div>
       </div>
    )
}

export default Home