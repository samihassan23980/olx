import {
    AiFillCar, AiFillCustomerService, AiFillBulb, AiFillCarryOut, AiFillBug, AiFillBuild,
    AiFillAudio , AiFillWindows , AiTwotoneCustomerService

} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Catogery() {


    const navigate = useNavigate()
    return (<div className=" w-auto bg-white">
        <div className="w-[80%] ml-auto mr-auto">
            <div className=" p-2">
                <h1 className="indent-5 text-3xl">All Catogery</h1>
            </div>
            <div className="flex flex-wrap justify-around font-mono">

                <div className="m-5" onClick={()=>navigate("/Catogery/Mobiles")}>
                    <AiTwotoneCustomerService className="h-28 w-28 border-2 rounded-full p-2 shadow-2xl" />
                    <h1 className="text-center">Mobiles</h1>
                </div>

                <div className="m-5" onClick={()=>navigate("/Catogery/Cars")} >
                <AiFillCar className="h-28 w-28 border-2 rounded-full p-2 shadow-2xl" />
                   <h1 className="text-center">Cars</h1>
                </div>

                <div className="m-5" onClick={()=>navigate("/Catogery/Cycles")}>
                    <AiFillBulb className="h-28 w-28 border-2 rounded-full p-2 shadow-2xl" />
                    <h1 className="text-center">Cycles</h1>
                </div>

                <div className="m-5" onClick={()=>navigate("/Catogery/Laptops")} >
                    <AiFillWindows className="h-28 w-28 border-2 rounded-full p-2 shadow-2xl" />
                    <h1 className="text-center">Laptops</h1>
                </div>
              
            </div>
        </div>
    </div>);
}

export default Catogery;