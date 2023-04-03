import { useEffect, useState } from "react";

const SteamUsersOnline = () => {
    const [isPlaying, setIsPlaying] = useState("0");
    const [isOnline, setIsOnline] = useState("0");

    useEffect(() => {
        fetchUsersPlaying();
    }, []);

    const fetchUsersPlaying = async () => {
        const res = await fetch("http://localhost:5000/getSteamUsers");
        const data = await res.json();

        if (!data) return;

        setIsOnline(data[1]);
        setIsPlaying(data[3]);
    };

    return (
        <div className="w-full flex bg-component-bg rounded-xl justify-around py-2 mb-10">
            <div className="leading-[45px]">
                <div className="text-gray-alt-txt font-pop_med text-[20px] flex items-center">
                    <div className="w-3 h-3 mr-2 rounded-full bg-steam-playing" /> PLAYING NOW
                </div>
                <p className="text-3xl font-pop_semi text-white md:text-[45px] pb-4">{isPlaying}</p>
            </div>

            <div className="leading-[45px] ">
                <div className="text-gray-alt-txt font-pop_med text-[20px] flex items-center">
                    <div className="w-3 h-3 mr-2 rounded-full bg-steam-online" /> ONLINE
                </div>
                <p className="text-3xl font-pop_semi text-white md:text-[45px] pb-4">{isOnline}</p>
            </div>
        </div>
    );
};

export default SteamUsersOnline;
