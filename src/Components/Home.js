import Catogery from "./Screen/Catogery";
import Header from "./Screen/Header";
import Products from "./Screen/Products";

function Home() {
    return (<div>
    
        <div className="h-auto   w-[100%]">
            <img src="https://www.solopress.com/thumbnails/0/205395/12/vinyl-banner-category-page-banner.jpeg" />
        </div>
        <Catogery />
        <Products />
    </div>);
}

export default Home;