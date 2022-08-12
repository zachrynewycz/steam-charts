import SearchBar from "./SearchBar";

const NavBar = () => {
    return (  
    <nav className="flex items-center ">
        <img className='w-44' src={`${process.env.PUBLIC_URL}/logo_steam_2.png`}/>
        <SearchBar/>
    </nav>
    );
}
 
export default NavBar;