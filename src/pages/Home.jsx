import NavBar from "../components/NavBar";
import RecordContainer from "../components/RecordContainer";
import SteamUsersOnline from "../components/SteamUsersOnline";
import TopGamesContainer from "../components/TopGamesContainer";
import Footer from "../components/Footer";

const Home = () => {
    return (  
        <div className="max-w-[850px] min-w-[400px] mx-auto">
            <NavBar/>
            <SteamUsersOnline/>
            <TopGamesContainer/>
            <RecordContainer/>
            <Footer/>
        </div>        
    );
}
 
export default Home;