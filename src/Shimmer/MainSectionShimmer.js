import React from 'react'
import ItemCardShimmer from './ItemCardShimmer'
const MainSectionShimmer = () => {
  return (
    <div className="h-screen">
      <div className="w-full h-18 bg-gray-100">
      </div>
    
    <div className="flex justify-center items-center mt-10 p-4">
      <p className="h-15 bg-gray-100 w-full md:w-6/12 mt-5 text-center rounded-md "></p>
    </div>
      <section className="mt-5 w-full flex justify-center  p-2">
         <div className="w-full lg:w-9/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 place-items-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <ItemCardShimmer key={index}/>
       ))}
      </div>

      </section>
     
      
    </div>
  )
}

export default MainSectionShimmer
