import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
  if (localStorage.getItem("isLoggedIn")) {
    navigate("/");
  }
}, [navigate]);
  const [phoneNumber, setPhoneNumber] = useState("")
   const [password, setPassword] = useState("");
  const [ error, setError] = useState("")


  const handleUserLogin = (e) => {
    e.preventDefault()
    if(!phoneNumber.startsWith("+254")){
      setError("Phone number must start with +254");
      return
    }
    if(phoneNumber.length !== 13){
      setError("Phone number must be exactly 13 characters")
      return
    }
       if (!password) {
      setError("Password is required");
      return
    }
      localStorage.setItem("isLoggedIn", "true");
       localStorage.setItem("phone", phoneNumber);
       localStorage.setItem("password", password); 

    navigate("/");
  }
  return ( 
    <div className="h-screen flex flex-col justify-center items-center p-2">
      <form onSubmit={handleUserLogin} className="w-full max-w-xl flex flex-col items-center gap-4"> 
         <h1 className="text-2xl font-serif">Login Now</h1>
        <div className="space-y-3">
         <input value={phoneNumber}  onChange={(e) => setPhoneNumber(e.target.value)} maxLength={13} type="tel"  placeholder="Enter Mobile Number"
        className="border w-full py-3 px-5 font-thin rounded-lg focus:outline-red-900 text-sm"/>
          <input value={password}  onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password"
        className="border w-full py-3 px-5 font-thin rounded-lg focus:outline-red-900 text-sm"/>
        </div>
        <button type="submit" className="bg-red-900 text-white px-7 py-2 tracking-wider rounded-lg text-sm md:text-md font-thin">Login</button>
      </form>
      {error && <p className="text-sm font-thin text-red-500 mt-2">{error}</p>}

      <span className="text-xs font-thin text-gray-500 mt-3 tracking-wide">Phone number must start with +254</span>
    </div>
  )
}

export default Login
