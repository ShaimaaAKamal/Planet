import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import NotFound from "../NotFound/NotFound";
import Planet from "../Planet/Planet";
import { Navigate } from "react-router-dom";
import planetsData from '../../data.json';
function App() {
  const backGrounds=['#419EBB','#EDA249','#6f2ed6','#D14C32','#D83A34','#CD5120','#1ec2a4','#2d68f0'];
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
