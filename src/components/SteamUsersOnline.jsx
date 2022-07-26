import { useEffect, useState } from "react";

const SteamUsersOnline = () => {
    const [isPlaying, setIsPlaying] = useState("0");
    const [isOnline, setIsOnline] = useState("0");
    
    useEffect(() => {
        fetch("/getSteamUsers")
        .then(res => res.json())
        .then(data => {
            setIsOnline(data[1]) 
            setIsPlaying(data[3])
        })
        .catch(e => console.log(e))
    },[])

    return (
    <div>
        <div>
            <div><div/> PLAYING NOW</div>
            <p>{isPlaying}</p>
        </div>
        <div>
            <div><div/> ONLINE</div>
            <p>{isOnline}</p>
        </div>
    </div>
    );
}
 
export default SteamUsersOnline;