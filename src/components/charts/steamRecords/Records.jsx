import { useEffect, useState } from "react";
import RecordList from "./RecordList";

const Records = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/getRecords")
            .then((res) => res.json())
            .then((data) => setRecords(data));
    }, []);

    return (
        <>
            <h1 className="text-xl md:text-5xl font-pop_semi text-white">RECORDS &#128293;</h1>
            <p className="font-pop_reg text-white mt-2">Highest player counts to be reached</p>

            <div className="mt-10">
                <div className="text-white text-sm flex justify-between">
                    <p className="w-1/2">RANK</p>

                    <div className="w-1/2 flex justify-end mr-5 text-right">
                        <p className="mr-5">PEAK PLAYERS</p>
                        <p className="w-1/3">DATE REACHED</p>
                    </div>
                </div>

                {records.map((record, i) => (
                    <RecordList key={record.id} data={record} rank={i} />
                ))}
            </div>
        </>
    );
};

export default Records;
