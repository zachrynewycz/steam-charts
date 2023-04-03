import Footer from "../components/shared/Footer";
import SteamUsersOnline from "../components/steamUsersOnline/SteamUsersOnline";
import Charts from "../components/charts/Charts";
import NavBar from "../components/nav/NavBar";

const Home = () => {
    return (
        <div className="max-w-[900px] min-w-[400px] mx-auto p-5 md:p-none relative">
            <NavBar />
            <SteamUsersOnline />
            <Charts />
            <Footer />
        </div>
    );
};

export default Home;
