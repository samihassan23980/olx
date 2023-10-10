import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {

    const parm = useParams()
    const [ads , setAds] = useState()
    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then(res=>setAds(res))

    }, [])


if(!ads){
    return(<div>Loading</div>)
}


    return (
        <div className="mt-6 w-[100%] h-auto bg-white">
             
        <div className="group p-3 relative w-[60%] ml-auto mr-auto">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    src={ads[parm.id].image}
                   
                    className="h-full p-2 w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className=" flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a >
                            <span aria-hidden="true" className="absolute inset-0" />
                            {ads[parm.id].title}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500"></p>
                </div>
                <p className="text-sm font-medium text-gray-900">{ads[parm.id].price}</p>
            </div>
        </div>
        </div>

    );
}

export default ProductDetails;