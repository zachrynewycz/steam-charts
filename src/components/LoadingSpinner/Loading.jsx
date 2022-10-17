const Loading = () => {
    return (  
        <div>
            <h1 className="text-8xl font-pop_semi text-center text-white pt-52 flex justify-center gap-10 items-center">
                Loading 
                <div className="lds-ring">
                    <div/><div/><div/><div/>
                </div>
            </h1>            
        </div>
    );
}
 
export default Loading;