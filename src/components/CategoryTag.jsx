const CategoryTag = ({ name }) => {
    return (  
        <div>
            <img src={`${process.env.PUBLIC_URL}/tag.png`}/>
            <p>{name}</p>
        </div>
    );
}
 
export default CategoryTag;