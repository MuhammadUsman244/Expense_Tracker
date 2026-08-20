import './ExpensesList.css'

function ExpensesList({expense}){
    return(
        <div className="expenseContainer">
            <h1>List</h1>
            <hr/>
            {expense.length===0&&<p>Empty</p>}
            {expense.length>0&&
            <div>{
            expense.map((elem,index)=>{
                return (<div key={index}>
            <h2>{elem.name}</h2>
                <h2>Rs. {elem.amount}</h2>
                <span>{elem.category} | {elem.date}</span>
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