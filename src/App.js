import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainSection from "./components/MainSection"
import Login from "./components/Login"
import Body from "./components/Body"
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import ItemDetails from "./components/ItemDetails";
import ProtectedRoute from "./ProtectedRoute";
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
          element: (
          <ProtectedRoute>
             <MainSection />
          </ProtectedRoute>
          )
        },
        {
          path: "/login",
          element: <Login />
        }, {
          path: "/itemDetails/:id",
          element:  (
          <ProtectedRoute>
             <ItemDetails/>
          </ProtectedRoute>
          )
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
