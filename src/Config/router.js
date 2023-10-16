import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "../Components/Screen/Header";
import Home from "../Components/Home";
import Products from "../Components/Screen/Products";
import ProductDetails from "../Components/Screen/ProductDetails";
import Signin from "../Components/Screen/Signin";
import Signup from "../Components/Screen/Signup";
import AddProduct from "../Components/Screen/AddProduct";
import Mobiles from "../Components/Screen/Mobiles";
import Cycles from "../Components/Screen/Cycles";
import Cars from "../Components/Screen/Cars";
import Laptops from "../Components/Screen/Laptop";


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
                path: 'Cars/:id',
                element: <ProductDetails />
            },

            {
                path: 'Laptops/:id',
                element: <ProductDetails />
            },
            {
                path: 'Cycles/:id',
                element: <ProductDetails />
            },
            {
                path: 'Mobiles/:id',
                element: <ProductDetails />
            },
            {
                path: 'Catogery/Mobiles',
                element: <Mobiles />
            },
            {
                path: 'Catogery/Cycles',
                element: <Cycles />
            },
            {
                path: 'Catogery/Cars',
                element: <Cars />
            },
            {
                path: 'Catogery/Laptops',
                element: <Laptops />
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