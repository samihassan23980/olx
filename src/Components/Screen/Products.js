import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAds } from "../../Config/firebase";
import Mobiles from "./Mobiles";
import Cycles from "./Cycles";
import Laptops from "./Laptop";
import Cars from "./Cars";

function Products() {
   
    return (
        <div className="bg-white">
          <Mobiles/>
       <Cycles/>
       <Laptops/>
       <Cars/>
        </div>
    )
}


export default Products;