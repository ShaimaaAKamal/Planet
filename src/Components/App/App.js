import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import NotFound from "../NotFound/NotFound";
import Planet from "../Planet/Planet";
import { Navigate } from "react-router-dom";

function App() {
  const routes=createBrowserRouter([
    {path:'/' ,element:<Layout/>,errorElement:<NotFound/>,children:[
      {index:true ,element:<Navigate to='/Planet/Mercury'/>},
      {path:'Planet/:planet',element:<Planet/>}
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
