import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "../Components/Screen/Header";
import Home from "../Components/Home";
import Products from "../Components/Screen/Products";
import ProductDetails from "../Components/Screen/ProductDetails";
import Signin from "../Components/Screen/Signin";
import Signup from "../Components/Screen/Signup";
import AddProduct from "../Components/Screen/AddProduct";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [

            {
                path: 'Products',
                element: <Products />
            },
            {
                path: 'Home',
                element: <Home />

            },
            {
                path: 'Products/:id',
                element: <ProductDetails />
            },
            {
                path: 'Signin',
                element: <Signin />
            },
            {
                path: 'Signup',
                element: <Signup />
            },
            {
                path: 'AddProduct',
                element: <AddProduct />
            }

        ]
    },]
)


function Router() {
    return <RouterProvider router={router} />
}

function Dashboard() {
    return (<>
        <Header />
        <Outlet />


    </>)
}

export {
    Router,
    Dashboard
};