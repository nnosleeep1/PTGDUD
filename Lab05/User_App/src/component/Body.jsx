
import Table from "./Table"
import OverView from "./OverView";

const Body=({data,setData,fetchData})=>{
    
    return(
        <div className="w-full p-5 border-2 border-[#EDEDED]">
           
            <OverView    />
            <Table data={data} setData={setData} fetchData={fetchData} />
          
        </div>
    )
}

export default Body;