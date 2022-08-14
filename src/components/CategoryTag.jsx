const CategoryTag = ({ name }) => {
    return (  
        <div className="bg-category-bg mt-2 mr-3 flex px-2 py-1 rounded-lg items-center">
            <img className="w-4 mr-2 object-contain" src={`${process.env.PUBLIC_URL}/tag.png`}/>
            <p className="font-pop_med text-[#c1c1c1] text-xs">{name}</p>
        </div>
    );
}
 
export default CategoryTag;