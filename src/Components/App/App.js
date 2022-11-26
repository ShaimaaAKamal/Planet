import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import NotFound from "../NotFound/NotFound";
import Planet from "../Planet/Planet";
import { Navigate } from "react-router-dom";
import planetsData from '../../data.json';

function App() {
  const backGrounds=['#D9F5FD','#FFCA72','#525BFF','#FF5C34','#F7AA71','#FFC957','#00F4D4','#3480FF'];
  const routes=createBrowserRouter([
    {path:'/' ,element:<Layout planetsData={planetsData} backGrounds={backGrounds}/>,errorElement:<NotFound/>,children:[
      {index:true ,element:<Navigate to='/Planet/Mercury'/>},
      {path:'Planet/:planet',element:<Planet planetsData={planetsData}/>}
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
