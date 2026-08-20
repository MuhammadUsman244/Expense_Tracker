import './FunctionalSection.css'
import AddExpense from './AddExpense.jsx'
import ExpensesList from './ExpensesList.jsx'
import {useState} from 'react'
function FunctionalSection({totalAmount,setTotalAmount,setTotalNumber,highestExpense, setHighestExpense}){
    const [expense,setExpense]=useState([]);
    const [expenseName, setExpenseName]=useState("");
    const [expenseAmount,setExpenseAmount]=useState(0);
    const [expenseCategory,setExpenseCategory]=useState("Food");
    const [expenseDate,setExpenseDate]=useState("");
    const [expenseAdd,setExpenseAdd]=useState(false);
    function showExpense(){
        setTotalNumber((prev)=>prev+1);
        highestExpense<expenseAmount ? setHighestExpense(expenseAmount):setHighestExpense(highestExpense);
        console.log(expenseName);
        console.log(expenseAmount);
        console.log(expenseDate);
        setExpenseAdd(true);
        const newObj={name: expenseName,amount: expenseAmount,category: expenseCategory,date: expenseDate};
        setTotalAmount(totalAmount+expenseAmount);
        setExpense((prevExpense)=>[...prevExpense,newObj]);
        setExpenseName("");
        setExpenseAmount(0);
        setExpenseDate("");
        setExpenseAdd(false);
    }
    return(
        <div className="mainContainer">
            <AddExpense name={expenseName} setName={setExpenseName} amount={expenseAmount} setAmount={setExpenseAmount} category={expenseCategory} setCategory={setExpenseCategory} date={expenseDate} setDate={setExpenseDate} showExpense={showExpense}/>
            <ExpensesList expense={expense}/>
        </div>
    )
}
export default FunctionalSection;