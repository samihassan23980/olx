import { useEffect } from "react";
import Catogery from "./Screen/Catogery";
import Header from "./Screen/Header";
import Products from "./Screen/Products";
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../Config/firebase";


function Home() {

    useEffect(()=>{

        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              console.log('ze he user'+uid)
              // ...
            } else {
              // User is signed out
              // ...
            }
          });


    },[])
    return (<div>
    
        <div className="h-auto   w-[100%]">
            <img src="https://www.solopress.com/thumbnails/0/205395/12/vinyl-banner-category-page-banner.jpeg" />
        </div>
        <Catogery />
        <Products />
    </div>);
}

export default Home;