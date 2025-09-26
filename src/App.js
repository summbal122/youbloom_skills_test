import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainSection from "./components/MainSection"
import Login from "./components/Login"
import Body from "./components/Body"
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import ItemDetails from "./components/ItemDetails";
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
        }, {
          path: "/itemDetails/:id",
          element: <ItemDetails />
        }
      ]
    }
  ])

const App = () => {
  return(
     <Provider store={appStore}>
      <RouterProvider router={appRouter} ></RouterProvider>
     </Provider>
      
    
  )
}

export default App
