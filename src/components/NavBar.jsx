import SearchBar from "./SearchBar";

const NavBar = () => {
    return (  
    <nav className="flex items-center justify-between pt-4 mb-10">
        <img className='w-40' src={`${process.env.PUBLIC_URL}/logo_steam_2.png`}/>
        <SearchBar/>
    </nav>
    );
}
 
export default NavBar;