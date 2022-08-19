import { useEffect, useState } from "react";

const SteamUsersOnline = () => {
    const [isPlaying, setIsPlaying] = useState("0");
    const [isOnline, setIsOnline] = useState("0");
    
    useEffect(() => {
        fetch("https://steamcharts.herokuapp.com/getSteamUsers")
        .then(res => res.json())
        .then(data => {
            setIsOnline(data[1]) 
            setIsPlaying(data[3])
        })
    },[])

    return (
    <div className="w-full flex bg-component-bg rounded-xl justify-around py-2 mb-10">
        <div className="leading-[45px]">
            <div className="text-gray-alt-txt font-pop_med text-[20px] flex items-center"><div className="w-3 h-3 mr-2 rounded-full bg-steam-playing"/> PLAYING NOW</div>
            <p className="text-3xl font-pop_semi text-white md:text-[50px] pb-4">{isPlaying}</p>
        </div>

        <div className="leading-[45px] ">
            <div className="text-gray-alt-txt font-pop_med text-[20px] flex items-center"><div className="w-3 h-3 mr-2 rounded-full bg-steam-online"/> ONLINE</div>
            <p className="text-3xl font-pop_semi text-white md:text-[50px] pb-4">{isOnline}</p>
        </div>
    </div>
    );
}
 
export default SteamUsersOnline;