import "../css/header.css"

function  Header(){
    return(
        <>
            <div className="header">
                <img src={"./images.png"} alt="" />
                <h4>Chefify</h4>
                <div className="inp">
                    <img src={"./search.png"} alt="" style={{ height: "30px"  }} />
                    <input type="text" style={{ border: "none",height: "30px" ,borderRadius:"5px",backgroundColor:"rgb(236, 170, 170)"}}/>
                  
                </div>
                <ul className="menu">
                    <li>What to cook</li>
                    <li>Recipes</li>
                    <li>Ingredients</li>
                    <li>Occasions</li>
                    <li>About Us</li>
                </ul>
                <div className="recipe">
                    <p>Your Recipe Box</p>
                </div>
                <div className="avatar">
                    
                </div>
            </div>
        </>
    )

}
export default Header