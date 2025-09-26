import useFetchData from "../utils/useFetchData"
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard"
import { useState } from "react";
import Header from "./Header";

const MainSection = () => {
  useFetchData();
  const items = useSelector((store) => store.items.items);
  console.log(items)
  const [query, setQuery] = useState("");
  if (items.length === 0) return "no data"
   const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  const handleSearch = (e)=> {
    setQuery(e.target.value)


  }
  return (
    <main className="h-screen flex flex-col overflow-y-scroll">
      <Header/>
   
   <section className="p-3 md:p-8 flex flex-col gap-4">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center p-4">
         <h1 className="text-2xl mb-2 font-serif ">Users Info</h1>
        <input onChange={handleSearch} type="text" value={query} placeholder="Search using title"
        className="border w-full py-3 px-5 font-thin rounded-lg focus:outline-red-900 text-sm"/>
        </div>
        <div className="flex justify-center">
      <div className="w-full lg:w-9/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
        {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div key={item.id}>
                  <ItemCard item={item} />
                  <hr className="text-gray-200" />
                </div>
              ))
            ) : (
              <p className="text-red-800 text-center text-sm tracking-wide ">No suggestions found</p>
            )}
      </div>
      </div>
  
    </section>
    </main>
  )
}

export default MainSection
