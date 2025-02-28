import "../css/footer.css"
function Footer(){
 return(
    <>
    <div className="container">
    <div className="left">
        <h4>About Us</h4> <br />
        <p>Welcome to our Website, a wonderful place to explore and learn how to cook like a pro.</p> <br />
        <input type="text" name="" id="" placeholder="Inter your email" />
        <button style={{ backgroundColor:"rgb(236, 112, 195)", borderRadius:"5px"}}>Send</button> <br />
        <ul >
            <li><img src="./logo.svg" alt="" style={{height:"70px"}}/> 
       </li>
            <li> <h2 >Chefify</h2></li>
            <li><h5>2023 chefify Company</h5></li>
            <li><h5>terms of service| Pricavy Policy</h5></li>
        </ul>
        </div>
    <div className="mid">
        <ul className="menu1">
            <li><h4>Learn More</h4></li> 
            <li>Our Cooks</li>
            <li>See Our Feartures</li>
            <li>FAQ</li>
        </ul>

        <ul className="menu2">
            <li><h4>Shop</h4></li>
            <li>Gift Subscription</li>
            <li>Send Us FeedBack</li>
        </ul>

    </div>
    <div className="right">
        <ul className="menu">
            <li><h4>Recipes</h4></li>
            <li>What to Cook This Week</li>
            <li>Pasta</li>
            <li>Dinner</li>
            <li>Healthy</li>
            <li>Vegetarian</li>
            <li>Vegan</li>
            <li>Chirstmas</li>
        </ul>
    </div>
    </div>
        
    </>
 )
}
export default Footer;