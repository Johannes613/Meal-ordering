import Hero from "../../components/Hero/Hero";
import Menu from "../../components/Menu/Menu";
import FoodList from "../../components/FoodList/FoodList";
import { useState } from "react";
import AppDownload from "../../components/AppDownload/AppDownload";
const Home = () => {
    const [category,setCategory] = useState("All")
    return ( 
        <div className="home">
            <Hero/>
            <Menu category = {category} setCategory = {setCategory}/>
            <FoodList category = {category} setCategory = {setCategory}/>
            <AppDownload/>

        </div>
     );
}
export default Home;