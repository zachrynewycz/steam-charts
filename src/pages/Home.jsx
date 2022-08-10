import NavBar from "../components/NavBar";
import SteamUsersOnline from "../components/SteamUsersOnline";
import TopGamesContainer from "../components/TopGames";

const Home = () => {
    return (  
        <div>
            <NavBar/>
            <SteamUsersOnline/>
            <TopGamesContainer/>
        </div>        
    );
}
 
export default Home;