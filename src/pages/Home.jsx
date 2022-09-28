import NavBar from "../components/NavBar";
import RecordContainer from "../components/Home/RecordContainer";
import SteamUsersOnline from "../components/Home/SteamUsersOnline";
import TopGamesContainer from "../components/Home/TopGamesContainer";
import Footer from "../components/Footer";

const Home = () => {
    return (  
        <div className="max-w-[850px] min-w-[400px] mx-auto p-5 md:p-none">
            <NavBar/>
            <SteamUsersOnline/>
            <TopGamesContainer/>
            <RecordContainer/>
            <Footer/>
        </div>        
    );
}
 
export default Home;