import SearchBar from "./SearchBar";

const NavBar = () => {
    return (  
    <nav>
        <img className='w-40' src={`${process.env.PUBLIC_URL}/logo_steam.png`}/>
        <SearchBar/>
    </nav>
    );
}
 
export default NavBar;