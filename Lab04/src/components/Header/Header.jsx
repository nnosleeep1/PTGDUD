import "../../index.css"
import { useState } from 'react'
import { assets } from "../../assets/assets"
const Header = () => {
    const [menu,setMenu]=useState(["What to cook","Recipes","Ingredients","Occasions","About Us"])
    return(
        <>
           <div className="flex justyfiy-evenly items-center gap-10 mt-5">
                <div className="items-center flex gap-10">
                    <img src={assets.logo} alt="logo" className="­w-[50px] h-[50px]" />
                    <p className="text-[25px] font-bold text-[rgb(230,64,119)]">Chefify</p>
                </div>
                <div className="flex justify-start bg-[#e7e7e7] p-[10px 20px] rounded-[10px] w-125">
                    <img src={assets.search_icon} alt="search_icon" className="w-12 ml-4" />
                    <input type="text" placeholder="cakescascsa" className="outline-0 border-0 bg-[#e7e7e7]"/>
                </div>
                <ul className="m-0 list-none flex justify-space-between items-center gap-10">
                    {menu.map((item,index)=> <li className="navbar-menu_item" key={index}>{item} </li> )}
                   
                    
                </ul>
                <div className="flex">
                    <img src={assets.tasklist} alt="tasklist" className="w-6 h-6"/>
                    <p className="font-bold">Your Recipe Box</p> 
                  
                    
                </div>
                <img src={assets.user_icon} alt="user_icon" className="w-5 h-5"/>
            </div>

        </>
    )
}

export default Header;