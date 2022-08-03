import NavBar from "../components/NavBar";
import SteamUsersOnline from "../components/SteamUsersOnline";
import TopGames from "../components/TopGames";

const Home = () => {
    return (  
    <div className=''>
      <NavBar/>
      <SteamUsersOnline/>
      <TopGames/>
    </div>        
    );
}
 
export default Home;