import SearchBar from "../components/SearchBar";
import SteamUsersOnline from "../components/SteamUsersOnline";
import TopGames from "../components/TopGames";

const Home = () => {
    return (  
    <div className='bg-[#0c1820] h-screen'>
      <nav>
        <img className='w-40' src={`${process.env.PUBLIC_URL}/logo_steam.png`}/>
        <SearchBar/>
      </nav>

      <SteamUsersOnline/>
      <TopGames/>
    </div>        
    );
}
 
export default Home;