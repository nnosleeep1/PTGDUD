import Header from "../component/Header"
import Menu from "../component/Menu"
import OverView from "../component/OverView"
const Integration=()=>{
    return(
      
        <div className="flex pl-10 pr-10">
        <div><Menu/></div>
         <div className="w-full px-5">
             <Header/>
              <OverView></OverView>
              <>Integration</>
         </div>
         <div></div>
    </div>
    )
}

export default Integration