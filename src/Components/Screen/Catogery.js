import {
    AiFillCar, AiFillCustomerService, AiFillBulb, AiFillCarryOut, AiFillBug, AiFillBuild,
    AiFillAudio

} from "react-icons/ai";

function Catogery() {
    return (<div className=" w-auto bg-white">
        <div className="w-[80%] ml-auto mr-auto">
            <div className=" p-2">
                <h1 className="indent-5 text-3xl">All Catogery</h1>
            </div>
            <div className="flex flex-wrap justify-around font-mono">

                <div className="m-5" >
                    <AiFillCar className="h-28 w-28 border-2 rounded-full p-2 shadow-2xl" />
                    <h1 className="text-center">Cars</h1>
                </div>

                <div className="m-5" >
                    <AiFillCustomerService className="h-28 w-28 border-2 rounded-full p-2 shadow-2xl" />
                    <h1 className="text-center">Electronics</h1>
                </div>

                <div className="m-5" >
                    <AiFillBulb className="h-28 w-28 border-2 rounded-full p-2 shadow-2xl" />
                    <h1 className="text-center">Bulb</h1>
                </div>

                <div className="m-5" >
                    <AiFillBug className="h-28 w-28 border-2 rounded-full p-2 shadow-2xl" />
                    <h1 className="text-center">AiFillBug</h1>
                </div>
                <div className="m-5" >
                    <AiFillBuild className="h-28 w-28 border-2 rounded-full p-2 shadow-2xl" />
                    <h1 className="text-center">AiFillBuild</h1>
                </div>
                <div className="m-5" >
                    <AiFillCarryOut className="h-28 w-28 border-2 rounded-full p-2 shadow-2xl" />
                    <h1 className="text-center">AiFillCarryOut</h1>
                </div>
                <div className="m-5" >
                    <AiFillCarryOut className="h-28 w-28 border-2 rounded-full p-2 shadow-2xl" />
                    <h1 className="text-center">AiFillCarryOut</h1>
                </div>
                <div className="m-5" >
                    <AiFillAudio className="h-28 w-28 border-2 rounded-full p-2 shadow-2xl" />
                    <h1 className="text-center">AiFillAudio</h1>
                </div>
                <div className="m-5" >
                    <AiFillCarryOut className="h-28 w-28 border-2 rounded-full p-2 shadow-2xl" />
                    <h1 className="text-center">AiFillCarryOut</h1>
                </div>
                <div className="m-5" >
                    <AiFillCarryOut className="h-28 w-28 border-2 rounded-full p-2 shadow-2xl" />
                    <h1 className="text-center">AiFillCarryOut</h1>
                </div>
            </div>
        </div>
    </div>);
}

export default Catogery;