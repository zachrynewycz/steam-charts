import NavBar from "../components/NavBar";
import SteamUsersOnline from "../components/SteamUsersOnline";
import TopGames from "../components/TopGames";

const Home = () => {
    return (  
        <div>
            <NavBar/>
            <SteamUsersOnline/>
            <TopGames/>
        </div>        
    );
}
 
export default Home;