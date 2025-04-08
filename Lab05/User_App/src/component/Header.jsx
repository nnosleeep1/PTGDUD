import iconSearch from "../assets/Lab_05/searchIcon.png"
import chuong from "../assets/Lab_05/chuong.png"
import quetstion from "../assets/Lab_05/Question.png"
import avatar from "../assets/Lab_05/Avatar 313.png"
const Header=()=>{
    return(
        <div className=" w-[100%]  flex justify-between items-center  border-l-2 border-r-2 border-[#EDEDED] p-5">
            <h1 className="text-3xl font-bold text-[#E65586]  justify-center">Dashboard</h1>
            <div className=" h-[40px] justify-center mr-20  flex">
               <div className="bg-[#F3F4F6] w-[300px] rounded-lg flex px-3 py-1.5 gap-4 items-center">
                    <img src={iconSearch} alt="" className="w-[30px]" />
                    <input type="text" name="" id="" className="border-0 outline-none" placeholder="Search..."/>
               </div>
                <img src={chuong} alt="" className="w-[30px] p-1 m-1 " />
                <img src={quetstion} alt="" className="w-[30px] p-1 m-1 " />
                
                <img src={avatar} alt="" className="w-[30px] p-1 m-1 " />
            </div>
        </div>
        
    )
}

export default Header