import { assets } from "../../assets/assets"


const Footer = () => {
    return (
        <div className="bg-[#1E1E1E] h-[280px] rounded-t-xl flex  p-4 text-white">
            <div className="w-[40%] text-white    ml-[5%] ">
                <h1 className=" font-bold  text-2xl">About Us</h1>
                <p>Welcome to our website a wonderful place to explore and learn how to cook like a pro.</p>
                <form action="" className="w-[60%] h-[80px] mt-2">
                    <input type="text" placeholder="Enter your email" className="bg-white rounded-2xl p-2 w-[80%] text-black"/>
                    <button className="bg-[#F84886] rounded-2xl ml-3 p-2">Send</button>
                </form>
                <form action=""  className="flex justify-center items-center ">
                    <img src={assets.logo} alt="" /> 
                    <h1 className="font-bold ml-2 text-3xl">Chefify</h1>
                    <p className="ml-4">2023 Chefify Company</p>
                <p className="ml-4">Teams of Service Privacy Policy</p>
                </form>
                
            </div>
            <div className="text-white w-[20%] h-[100%] items-center justify-center pl-[5%]">
                <ul>
                    <li className="font-bold">Learn more</li>
                    <li>Our Cooks</li>
                    <li>See Our Features</li>
                    <li>FAQ</li>
                </ul>

                
                    <ul className="justify-end mt-18">
                        <li className="font-bold">Shop</li>
                        <li>Gift Subscription</li>
                        <li>Send Us Feedback</li>
                    </ul>
                
            </div>
            <div className="right pl-[5%]">
                <ul className="space-y-1.5">
                    <li className="font-bold ">Recipes</li>
                    <li>What to Cook This Week</li>
                    <li>Pasta</li>
                    <li>Dinner</li>
                    <li>Healthy</li>
                    <li>Vegetarian</li>
                    <li>Vegan</li>
                    <li>Christmas</li>
                </ul>
            </div>
        </div>
    );
};


export default Footer