import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userData } from "../../Config/firebase";
import { useLocation } from 'react-router-dom';
import Mobiles from "./Mobiles";
import Cycles from "./Cycles";
import Laptops from "./Laptop";
import Cars from "./Cars";

function ProductDetails() {

    let location = useLocation();
    const getcatogery = location.pathname.split('/')

    const Navigate = useNavigate()
    const { id } = useParams()
    const [fullDetail, setFullDetail] = useState()

    const Route = <Mobiles />
    const Route1 = <Cycles />
    const Route2 = <Laptops />
    const Route3 = <Cars />


    useEffect(() => {
        const getData = async () => {
            try {

                const getData = await userData(getcatogery[1], id)
                setFullDetail(getData)
            }
            catch (e) {
                alert(e.message)
            }
        }
        getData()

    }, [id, Route])




    if (!fullDetail) {
        return <div>Loading</div>
    }

    return (
        <div className="mt-6 w-[100%] h-auto bg-white">
            <button onClick={() => Navigate('/Products')}>See All Products</button>
            <div className="group p-3 relative w-[60%] ml-auto mr-auto">
                <div className="   overflow-hidden h-auto rounded-md bg-gray-200  group-hover:opacity-75 ">
                    <img
                        src={fullDetail.imageurl}

                        className="h-full p-2 w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className=" flex justify-between">

                </div>
                <div className=" flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a >
                                <span aria-hidden="true" className="absolute inset-0" />
                                {fullDetail.title}
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{fullDetail.description}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{fullDetail.price}</p>
                </div>
            </div>
            {getcatogery[1] === "Mobiles" && Route}
            {getcatogery[1] === "Cycles" && Route1}
            {getcatogery[1] === "Laptops" && Route2}
            {getcatogery[1] === "Cars" && Route3}
        </div>
    );
}

export default ProductDetails; 