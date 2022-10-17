import { useState } from "react";
import NavBar from "../components/Nav/NavBar";
import Footer from "../components/Footer/Footer";
import SteamUsersOnline from "../components/SteamUsers/SteamUsersOnline";
import RecordContainer from "../components/Records/RecordContainer";
import TopPlayedContainer from "../components/TopPlayed/TopPlayedContainer"
import ChartDropdown from "../components/ChartDropdown/ChartDropdown";

const Home = () => {
    const [selectedChart, setSelectedChart] = useState("")

    return (  
        <div className="max-w-[900px] min-w-[400px] mx-auto p-5 md:p-none relative">
            <NavBar/>
            <SteamUsersOnline/>
            <ChartDropdown setSelectedChart={setSelectedChart}/>
            {selectedChart === "records" ? <RecordContainer/> : <TopPlayedContainer/>}
            <Footer/>
        </div>        
    );
}
 
export default Home;