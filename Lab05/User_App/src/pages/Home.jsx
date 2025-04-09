import { useEffect, useState } from "react";
import Body from "../component/Body"
import Header from "../component/Header"
import Menu from "../component/Menu"

const Home=()=>{
    const [data, setData] = useState([]);

    return(
       <div className="flex pl-10 pr-10">
           <div><Menu/></div>
            <div className="w-full px-5">
                <Header/>
                 <Body />
            </div>
            <div></div>
       </div>
    )
}

export default Home