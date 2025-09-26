import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="w-full py-3 px-15 shadow-sm font-serif">
      <nav className="flex justify-between items-center" >
        <ul className="flex gap-8 font-thin text-md text-gray-600">
        <li className="hover:text-red-900 hover:cursor-pointer"><Link to="/">Home</Link></li>
        <li className="hover:text-red-900 hover:cursor-pointer">About</li>
        <li className="hover:text-red-900 hover:cursor-pointer">Blogs</li>
        <li className="hover:text-red-900 hover:cursor-pointer">Contact</li>
        <li className="hover:text-red-900 hover:cursor-pointer">Stories</li>
        </ul>

        <button className="bg-red-900 text-white px-7 py-2 tracking-wider rounded-lg">Logout</button>
      
      </nav>

      
    </header>
  )
}

export default Header
