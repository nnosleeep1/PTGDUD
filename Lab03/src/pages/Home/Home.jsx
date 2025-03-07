import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./Home.css";

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);  // Add loading state
    const [error, setError] = useState(null);  // Add error state

    useEffect(() => {
        fetch('https://67c81bfd0acf98d07084e174.mockapi.io/Restaurant')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);  // Stop loading when data is fetched
            })
            .catch((error) => {
                setError(error);  // Set error if any
                setLoading(false);  // Stop loading
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;  // Show loading indicator
    }

    if (error) {
        return <div>Error loading data: {error.message}</div>;  // Show error message
    }

    return (
        <div className="home">
            <div className="menu-item">
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>
                            <img
                                src={item.image}
                                alt={item.text}
                                width={"200px"}
                                height={"200px"}
                            />
                            <br />
                            <h4 style={{color:"#DEA3B7"}}>{item.text}</h4>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
