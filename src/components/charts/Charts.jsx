import { useState } from "react";
import TopPlayed from "./playingNow/TopPlayed";
import Records from "./steamRecords/Records";

const Charts = () => {
    const [selectedChart, setSelectedChart] = useState("most");

    return (
        <>
            <select
                className="p-2 absolute right-6 rounded-sm cursor-pointer"
                onChange={(e) => setSelectedChart(e.target.value)}
            >
                <option defaultValue={true} value="most">
                    Most Played
                </option>
                <option value="records">Records</option>
            </select>

            {selectedChart === "most" ? <TopPlayed /> : <Records />}
        </>
    );
};

export default Charts;
