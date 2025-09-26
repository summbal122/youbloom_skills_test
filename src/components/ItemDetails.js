import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import Header from "./Header";

const ItemDetails = () => {
  const {id} = useParams();
  const items = useSelector((store) => store.items.items);
  const item = items.find((item) => item.id === Number(id))
   if (!item) {
    return (
      <div>
        <Header />
        <p>Item not found.</p>
      </div>
    );
  }
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <section className="flex-1 flex flex-col justify-center items-center gap-4">
       <div className="shadow-md px-10 py-12 capitalize w-full max-w-xl">
        <h1 className="font-medium text-4xl font-serif text-red-900 mb-4">User Details</h1>
        <h2 className="text-2xl font-thin mb-2 leading-6.5">{item.title}</h2>
        <p className="text-gray-600 font-thin text-md leading-5">
          {item.body}
        </p>
        </div>
      </section>
      
    </div>
  )
}

export default ItemDetails
