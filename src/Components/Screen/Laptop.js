import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAds } from "../../Config/firebase";


function Laptops() {
    const [ads, setAds] = useState()
    const navigate = useNavigate()

    useEffect(() => {

        data()

    }, [])

    const data = async () => {
        const Laptops = "Laptops"
        const adData = await getAds(Laptops)
        setAds(adData)
    }

    // More products...

    if (!ads) {
        return (<h1>Ads LOading</h1>)
    }
   
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Laptops</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {ads.map((product, index) => (
                        <div onClick={() => navigate('/Laptops/' + product.userID)} key={index} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imageurl}
                                    className="h-full w-full object-cover object-center p-1 lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.title}
                                        </a>
                                    </h3>

                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Laptops;