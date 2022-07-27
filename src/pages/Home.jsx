import SearchResults from "../components/SearchResults";
import SearchBar from "../components/SearchBar";
import SteamUsersOnline from "../components/SteamUsersOnline";

const Home = () => {
    return (  
    <div className='bg-[#0c1820] h-screen'>
        <nav>
          <img className='w-40' src={`${process.env.PUBLIC_URL}/logo_steam.png`}/>
          <SearchBar/>
        </nav>
  
        <SearchResults/>
        <SteamUsersOnline/>
    </div>        
    );
}
 
export default Home;