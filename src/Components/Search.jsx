import './Search.css'
function Search({searchKeyword,setSearchKeyword,searchedKeyword}){
    return(
    <div className="searchContainer">
        <div className="sticky">
        <h1>Search</h1>
        <input type="search" placeholder="searchExpenses...."  value={searchKeyword} onChange={(e)=>{setSearchKeyword(e.target.value)}}/>
        </div>
         <div className="twoDiv">{
            searchedKeyword.map((elem,index)=>{
                return (<div key={index}>
            <h2>{elem.name}</h2>
                <h2>Rs. {elem.amount}</h2>
                <span>{elem.category} | {elem.date}</span>
                <hr/>
            </div>);
            })
        }
            </div>

    </div>
    );
}
export default Search;