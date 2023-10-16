import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userData } from "../../Config/firebase";

function CarProductDetails() {


    const Navigate = useNavigate()
    const {id , category} = useParams()
    const [fullDetail, setFullDetail] = useState()



const cars = "Cars"
    useEffect(() => {
        const getData = async () => {
            try {

                const abc = await userData(cars , id)
                setFullDetail(abc)
            }
            catch (e) {
                alert(e.message)
            }
        }
        getData()

    }, [])


console.log("ye he id" + id)
console.log("ze he " + category)

    

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
        </div>
    );
}

export default CarProductDetails;