import './ExpensesList.css'

function ExpensesList({expense,getDelete,Editing}){
    return(
        <div className="expenseContainer">
            <div className="firstDiv">
            <h1>List</h1>
            </div>
            {expense.length===0&&<p style={{textAlign:"center",fontSize:"22px",fontWeight:"bolder"}}>Adding an Expenses</p>}
            {expense.length>0&&
            <div className="twoDiv">{
            expense.map((elem,index)=>{
                return (<div key={index}>
            <h2>{elem.name}</h2>
                <h2>Rs. {elem.amount}</h2>
                <span>{elem.category} | {elem.date}</span><br/>
                <button onClick={()=>getDelete(index)} style={{margin:"10px 20px 0px 0px",   padding:"20px 0px;"}}>Delete</button>
                <button onClick={()=>Editing(elem)}>Edit</button>
                <hr/>
            </div>);
            })
        }
            </div>
            
            }
        </div>
    );
}
export default ExpensesList;