const ChartDropdown = ({ setSelectedChart }) => {
    const handleDropdownChange = (e) => {
        setSelectedChart(e.target.value)
    }

    return (  
        <select className="p-2 absolute right-6 rounded-sm cursor-pointer" onChange={handleDropdownChange}>
            <option defaultValue={true} value="most">Most Played</option>
            <option value="records">Records</option>
        </select>
    );
}
 
export default ChartDropdown;