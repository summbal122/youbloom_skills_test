import { Link, useNavigate } from "react-router-dom"

const Header = () => {
   const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("phone");
    localStorage.removeItem("password");

    navigate("/login");
  };
  return (
    <header className="w-full py-3 px-6 md:px-15 shadow-sm font-serif">
      <nav className="flex justify-between items-center" >
        <ul className="flex gap-3 md:gap-8 font-thin text-xs md:text-sm text-gray-600">
        <li data-testid="nav-item" className="hover:text-red-900 hover:cursor-pointer"><Link to="/">Home</Link></li>
        <li data-testid="nav-item" className="hover:text-red-900 hover:cursor-pointer">About</li>
        <li data-testid="nav-item" className="hover:text-red-900 hover:cursor-pointer">Blogs</li>
        <li data-testid="nav-item" className="hover:text-red-900 hover:cursor-pointer">Contact</li>
        <li data-testid="nav-item" className="hover:text-red-900 hover:cursor-pointer">Stories</li>
        </ul>

        <button onClick={handleLogout} className="bg-red-900 text-white px-3 md:px-7 py-1 md:py-2 tracking-wider rounded-lg text-xs md:text-sm">Logout</button>
      
      </nav>

      
    </header>
  )
}

export default Header
