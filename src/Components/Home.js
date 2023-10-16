import { useEffect } from "react";
import Catogery from "./Screen/Catogery";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Config/firebase";
import Mobiles from "./Screen/Mobiles";
import Cycles from "./Screen/Cycles";
import Laptops from "./Screen/Laptop";
import Cars from "./Screen/Cars";


function Home() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log('ze he user' + uid)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });


  }, [])
  return (<div>

    <div className="h-auto   w-[100%]">
      <img src="https://www.solopress.com/thumbnails/0/205395/12/vinyl-banner-category-page-banner.jpeg" />
    </div>
    <Catogery />
    <Mobiles />
    <Cycles />
    <Laptops />
    <Cars />
  </div>);
}

export default Home;