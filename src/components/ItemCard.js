import { Link } from "react-router-dom"
const ItemCard = ({item}) => {
  return (
    <div className="p-3 md:p-4 shadow-sm flex flex-col justify-between bg-gray-100 rounded-sm h-38 hover:scale-105">
      <h1 className="font-thin text-sm capitalize">{item.title}</h1>
      <div className="w-full flex justify-center">
         <button  className="bg-gray-600 text-white px-6 py-2.5 tracking-wider font-thin rounded-lg text-xs hover:cursor-pointer hover:bg-gray-800">
          <Link to={`/itemDetails/${item.id}`}>View Details </Link>
          </button>
      </div>
     
    </div>
  )
}

export default ItemCard
