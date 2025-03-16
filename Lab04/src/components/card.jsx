const Card = (props) => {
    const { url, name, cost } = props;
    console.log(props)
    return (
      <div className="w-[200px] h-auto p-4 border rounded-lg shadow-md flex flex-col items-center gap-2">
       
        <img src={url} alt={name} className="w-full h-auto rounded-md" />
  
        
        <p className="font-bold text-center">{name}</p>
  
        
        {cost && <p className="text-gray-600 text-sm">{cost} VND</p>}
  
       
        <div className="w-12 h-12 border-2 border-pink-500 rounded-full flex items-center justify-center hover:bg-pink-100 cursor-pointer transition">
          <svg
            className="w-6 h-6 stroke-pink-500"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 3v18l6-5l6 5V3z"></path>
          </svg>
        </div>
      </div>
    );
  };
  
  export default Card;
  