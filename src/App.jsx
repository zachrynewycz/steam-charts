import './App.css';
import SearchResults from './components/SearchResults';
import SteamUsersOnline from './components/SteamUsersOnline';



//for getting a specific game: https://store.steampowered.com/api/appdetails?appids=10
const App = () => {

  return (  
    <div className='bg-[#0c1820] h-screen'>
      <nav>
        <img className='w-40' src={`${process.env.PUBLIC_URL}/logo_steam.png`}/>
      </nav>

      <SearchResults/>
      <SteamUsersOnline/>
    </div>
  );
}
 
export default App;
