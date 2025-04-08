import dashboard from"../assets/Lab_05/dashbord.png"
import triangle from"../assets/Lab_05/triangle.png"
import shop from"../assets/Lab_05/shop.png"
import dolar from"../assets/Lab_05/dolar.png"
import customer from "../assets/Lab_05/customer.png"

import { useState } from "react"

const OverView=()=>{
   
    return(
        <>
             <div className="flex gap-5">
                <img src={dashboard} alt="" />
                <h1 className="font-bold text-xl">OverView</h1>

            </div>
           <div className="flex justify-between mt-8">
                <div className="w-[30%] bg-[#FFF0F5] p-3 rounded">
                    <h1 className="font-bold justify-between flex">
                        <span>Turnover</span>
                        <button><img src={shop} alt="" /></button>
                    </h1>
                    <h1 className="font-bold text-3xl flex items-center space-x-2 mt-[-7px]">
                        
                        <span>$92,405</span>
                    </h1>
                    <h1 className="  flex items-center space-x-2 mt-2">
                        <img src={triangle} alt="" className="h-2.5" />
                        <span className="text-[#5EAC24] font-bold">5.39%</span>
                        <span>period of change</span>
                    </h1>
                </div>
                <div className="w-[30%] bg-[#EFF6FF] p-3 rounded">
                    <h1 className="font-bold justify-between flex">
                        <span>Profit</span>
                        <button><img src={dolar} alt="" /></button>
                    </h1>
                    <h1 className="font-bold text-3xl flex items-center space-x-2 mt-[-7px]">
                        
                        <span>$32,218</span>
                    </h1>
                    <h1 className="  flex items-center space-x-2 mt-2">
                        <img src={triangle} alt="" className="h-2.5" />
                        <span className="text-[#5EAC24] font-bold">5.39%</span>
                        <span>period of change</span>
                    </h1>
                </div>
                <div className="w-[30%] bg-[#EFF6FF] p-3 rounded">
                    <h1 className="font-bold justify-between flex">
                        <span>New customer</span>
                        <button><img src={customer} alt="" /></button>
                    </h1>
                    <h1 className="font-bold text-3xl flex items-center space-x-2 mt-[-7px]">
                        
                        <span>298</span>
                    </h1>
                    <h1 className="  flex items-center space-x-2 mt-2">
                        <img src={triangle} alt="" className="h-2.5" />
                        <span className="text-[#5EAC24] font-bold">6.48%</span>
                        <span>period of change</span>
                    </h1>
                </div>
           </div>
           
        </>
    )
}

export default OverView