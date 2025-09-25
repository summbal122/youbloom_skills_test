import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainSection from "./components/MainSection"
import Login from "./components/Login"
import Body from "./components/Body"
const AppLayout = () => { 
  return(
    <div>
      <Body/>
    </div>
  )
}

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <MainSection />
        },
        {
          path: "/login",
          element: <Login />
        }
      ]
    }
  ])


const App = () => {
  return(
    <RouterProvider router={appRouter} ></RouterProvider>
  )
}

export default App
