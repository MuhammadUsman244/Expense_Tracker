import './AddExpense.css'

function AddExpense({name, setName,amount,setAmount,category,setCategory, date,setDate,showExpense}){
    return(
        <div className="form">
            <h1>Add Expense</h1>
            <form>
                <label>Name </label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Grocery.." /><br />
                <label>Amount </label>
                <input type="number" value={amount} onChange={(e)=>setAmount(Number(e.target.value))} placeholder="2500" /><br/>
                <label>Category</label>
                <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option>Food</option>
                    <option>Transport</option>
                    <option>Bills</option>
                </select>
                <br />
                <label>Date</label>
                <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
                <button type="button" onClick={()=>{showExpense()}}>Add Expense</button>
            </form>
        </div>
    );
}
export default AddExpense;