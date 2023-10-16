import { useEffect, useState } from "react";
import { AiTwotoneCar, AiFillDatabase } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, signout } from "../../Config/firebase";



function Header() {


    const navigate = useNavigate()
    const [currentUser , setCurrentUser] = useState()
    const[userLogout , setUserLogot] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;

            setCurrentUser(uid)     
            // ...
          } else {
            // User is signed out
            // ...
          }
        });
    
    
      }, [currentUser , userLogout ])


async function logout() {
   await signout()

    .then(()=>{
        setCurrentUser(false)
        navigate('/Home')
    })
   
}      


    return (<div className="bg-slate-100  w-[100%] ">
        <div className="w-[100%]  bg-slate-200 ">
        <div className=" w-[80%] flex  ml-auto mr-auto items-center">
            <div className="flex-initial  w-25 m-1 p-2  "><img onClick={()=>{navigate('/Home')}} className="h-5" src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png" /></div>
            <div className="flex-initial w-30 m-1 p-2  flex  items-center"><AiTwotoneCar className="border-2 p-1 bg-slate-200 rounded-full h-7 w-7  text-2xl m-1" />Motors</div>
            <div className="flex-initial w-30 m-1 p-2  flex items-center"><AiFillDatabase className="border-2 p-1 bg-slate-200 rounded-full h-7 w-7  text-2xl m-1" />Property</div>
        </div>


        <div className=" h-20 w-[80%] flex    ml-auto mr-auto items-center justify-around">
            <div className="flex-initial w-25">
                <img className="h-10" onClick={()=>{navigate('Home')}} src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png" />
            </div>
            <div className=" md:flex-initial  md:w-[25%] ">
                <div>
                    
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Pakistan"
                    />
                </div>
            </div>
            <div className="flex-initial w-[35%]">
                <div>
                    
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder=""
                    />
                </div>

            </div>
            <div className="flex-initial flex justify-around w-[25%] ">
                {
                    currentUser 
                    ?
                    <button onClick={logout} className="w-24 border p-2 rounded-lg font-semibold text-1xl shadow-2xl bg-slate-50">Logot</button>   
                    :
                    <button onClick={()=>navigate('Signin')} className="w-24 border p-2 rounded-lg font-semibold text-1xl shadow-2xl bg-slate-50">Login</button>
                }
                
                {currentUser  ?  <button onClick={()=>navigate('AddProduct')} className="w-24 border p-2 rounded-full font-semibold text-1xl shadow-xl bg-slate-50">Sell</button>
            :  <button onClick={()=>navigate('/Signup')} className="w-24 border p-2 rounded-lg font-semibold text-1xl shadow-2xl bg-slate-50">Register</button>
        }
               
               
           
           
            </div>
        </div>
        <div className=" h-20 w-[100%] flex    ml-auto mr-auto items-center justify-around bg-white">
            <div className=" h-20 w-[80%] flex    ml-auto mr-auto items-center justify-around">

                <div className="w-24  font-semibold">
                    <p onClick={()=>(navigate('Products'))}>Catogery</p>
                </div>
                <div className="flex justify-around w-[80%] font-extralight ">
                    <p onClick={()=>navigate('Catogery/Mobiles')}>Mobile Phones</p>
                    <p onClick={()=>navigate('Catogery/Cars')}>Cars</p>
                    <p onClick={()=>navigate('Catogery/Laptops')}>Laptops</p>
                    <p onClick={()=>navigate('Catogery/Cycles')}>Cycles</p>
                    
                </div>
            </div>
        </div>
        </div>
      
    </div>);
}

export default Header;