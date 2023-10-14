import { useState } from "react";
import { addProduct } from "../../Config/firebase";

function AddProduct() {
    const [title , setTitle]= useState('')
    const [description , setDescription]= useState('')
    const [price , setPrice]= useState('')
    const [file , setFile]= useState()


function sendDetails(){
    addProduct(title, description , price , file[0])   

    setTitle('')
    setPrice('')
    setDescription('')
    setFile('')
   
}


    return (

        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 uppercase text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Upload Product Details
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">


                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Title
                        </label>
                        <div className="mt-2">
                            <input
                            value={title}
                             onChange={(e)=>setTitle(e.target.value)}
                                type="text"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Description
                        </label>
                        <div className="mt-2">
                            <input
                            value={description}
                              onChange={(e)=>setDescription(e.target.value)}
                                type="text"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label  className="block text-sm font-medium leading-6 text-gray-900">
                           Price
                        </label>
                        <div className="mt-2">
                            <input
                            value={price}
                                onChange={(e)=>setPrice(e.target.value)}
                                type="number"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>


                    <div>
                        <div className="flex items-center justify-between">
                            <label  className="block text-sm font-medium leading-6 text-gray-900">
                                File
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                         
                              onChange={(e)=>setFile(e.target.files)}
                            
                                type="file"
                               
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                        onClick={sendDetails}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            AddProduct
                        </button>
                    </div>


                   
                </div>
            </div>
        </>

    );
}

export default AddProduct;