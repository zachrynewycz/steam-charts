import NavBar from "../components/NavBar";
import RecordContainer from "../components/RecordContainer";
import SteamUsersOnline from "../components/SteamUsersOnline";
import TopGamesContainer from "../components/TopGamesContainer";

const Home = () => {
    return (  
        <div>
            <NavBar/>
            {/* <SteamUsersOnline/> */}
            {/* <TopGamesContainer/> */}
            <RecordContainer/>
        </div>        
    );
}
 
export default Home;