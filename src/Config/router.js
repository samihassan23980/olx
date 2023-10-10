import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "../Components/Screen/Header";
import Home from "../Components/Home";
import Products from "../Components/Screen/Products";
import ProductDetails from "../Components/Screen/ProductDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
        children: [

            {
                path : 'Products',
                element : <Products/>
            },
            {
                path : 'Home',
                element : <Home/>

            },
            {
                path : 'Products/:id',
                element : <ProductDetails/>
            }
          
        ]
    },]
)


function Router() {
    return <RouterProvider router={router} />
}

function Dashboard() {
    return (<>
        <Header/>
        <Outlet/>
       

    </>)
}

export {
    Router,
    Dashboard
};