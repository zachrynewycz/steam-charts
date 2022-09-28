import NavBar from "../components/NavBar";
import RecordContainer from "../components/Records/RecordContainer";
import SteamUsersOnline from "../components/SteamUsers/SteamUsersOnline";
import TopGamesContainer from "../components/TopGames/TopGamesContainer";
import Footer from "../components/Footer";

const Home = () => {
    return (  
        <div className="max-w-[800px] min-w-[400px] mx-auto p-5 md:p-none">
            <NavBar/>
            <SteamUsersOnline/>
            <TopGamesContainer/>
            <RecordContainer/>
            <Footer/>
        </div>        
    );
}
 
export default Home;