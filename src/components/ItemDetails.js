import { useParams, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import Header from "./Header";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const ItemDetails = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const items = useSelector((store) => store.items.items);
  const item = items.find((item) => item.id === Number(id))
   if (!item) {
    return (
      <div>
        <Header />
        <div className="flex gap-2 p-10">
           <IoArrowBackCircleOutline onClick={()=> navigate(-1)} size={24} className="mb-3 text-gray-500"/>
            <p>Item not found.</p>
        </div>
        
      </div>
    );
  }
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <section className="flex-1 flex flex-col justify-center items-center gap-4 p-4">
       
       
       <div className="shadow-md px-6 md:px-10 py-12 capitalize w-full max-w-xl rounded-sm">
      <div className="flex gap-2 items-center">
         <IoArrowBackCircleOutline onClick={()=> navigate(-1)} size={24} className="mb-3 text-gray-500"/>
        <h1 className="font-medium text-4xl font-serif text-red-900 mb-3">User Details</h1>
        </div>
          
        <h2 className="text-xl md:text-2xl font-thin mb-1 leading-6 md:leading-6.5">{item.title}</h2>
        <p className="text-gray-600 font-thin text-md leading-5">
          {item.body}
        </p>
        </div>
      </section>
      
    </div>
  )
}

export default ItemDetails
