import { useEffect, useState } from "react";
import RecordRow from "./RecordRow";

const RecordContainer = () => {
    const [records, setRecords] = useState([])

    useEffect(() => {
        fetch("/getRecords")
        .then(res => res.json())
        .then(data => setRecords(data))
    }, [])

    return ( 
        <div className="bg-component-bg rounded-xl px-6 py-5">
            <div className="flex mb-7">
                <div className="text-3xl w-3/4 font-pop_semi text-white">Player Records &#128293;</div>
                <div className="flex w-1/2 justify-around font-pop_semi items-center text-xl text-white text-center">
                    <p className="w-1/2">All Time Peak</p>
                    <p className="w-1/2">Date</p>
                </div>
            </div>
            
            {records.map(record => <RecordRow key={record.id} data={record}/>)}
        </div>
    );
}
 
export default RecordContainer;