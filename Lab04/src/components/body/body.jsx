import { useState, useEffect } from "react";
import Card from "../card";

const Body = () => {
  const [data, setData] = useState([]); // Mặc định là mảng rỗng để tránh lỗi .map()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://67c81bfd0acf98d07084e174.mockapi.io/Restaurants")
      .then((res) => res.json()) // Đúng cú pháp
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message); // Lưu error thành chuỗi để tránh lỗi khi hiển thị
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }
  console.log(data)
  return (
    <div>
      <ul className="flex flex-wrap p-10 items-center justify-center">
        
            {data.map((item, index) => (
            <li key={index} className="text-center items-center list-none p-10">
            <Card name={item.name} url={item.image} cost={item.price} />
    </li>
))}

      </ul>
     
    </div>
  );
};

export default Body;
