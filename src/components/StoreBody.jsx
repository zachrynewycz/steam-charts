const StoreBody = ( {data, players} ) => {
    return (  
        <div>
            <p>{data.short_description}</p>

            <div>
                <div>
                    <p>Playing Now<br/> <span>{players[0]}</span></p>
                    <p>24 Hour Peak<br/> <span>{players[1]}</span></p>
                    <p>All Time Peak<br/> <span>{players[2]}</span></p>
                </div>

                <div>
                    <p>Features</p>
                    {data.categories.map((category, i)=> <p key={i}>{category.description}</p>)}
                </div>
            </div>
        </div>
    );
}
 
export default StoreBody;