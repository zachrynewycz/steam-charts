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
        <div>
            <div>
                <h1>Top Records &#128293;</h1>
                <h1>All Time Peak &nbsp; Date</h1>
            </div>
            {records && records.map((record, i) => <RecordRow key={i} data={record}/>)}
        </div>
    );
}
 
export default RecordContainer;