import './FunctionalSection.css'
import AddExpense from './AddExpense.jsx'
import ExpensesList from './ExpensesList.jsx'
import {useState} from 'react'
import Search from './Search.jsx'
import {useEffect} from 'react'
function FunctionalSection({totalAmount,setTotalAmount,setTotalNumber,highestExpense, setHighestExpense}){
    const [expense,setExpense]=useState([]);
    const [expenseName, setExpenseName]=useState("");
    const [expenseAmount,setExpenseAmount]=useState(0);
    const [expenseCategory,setExpenseCategory]=useState("Food");
    const [expenseDate,setExpenseDate]=useState("");
    const [expenseAdd,setExpenseAdd]=useState(false);
    const [searchKeyword,setSearchKeyword]=useState("");
    const [searchedKeyword,setSearchedKeyword]=useState([]);
    const [edit, setEdit]=useState(false);
    const [editData,setEditData]=useState({});
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
        setSearchedKeyword((prevExpense)=>[...prevExpense,newObj]);
        setExpenseName("");
        setExpenseAmount(0);
        setExpenseDate("");
        setExpenseAdd(false);
    }
    function Editing(data){
        setEdit(true);
        console.log(data.name);
    }
    function getDelete(index){
        const newObj=expense.filter((elem,i)=>{
            return i!==index;
        });
        setExpense(newObj);
    }
    // function getSearch(){
    //     if(searchKeyword==""){
    //         setSearchedKeyword(expense);
    //     }
    //     const newObj=expense.filter((elem)=>{
    //         return elem.name.toLowerCase().includes(searchKeyword.toLowerCase());
    //     });
    //     setSearchedKeyword(newObj);

    // }
    useEffect(()=>{
        if(searchKeyword==""){
            setSearchedKeyword(expense);
        }else{
            const newObj=expense.filter((elem)=>{
            return elem.name.toLowerCase().includes(searchKeyword.toLowerCase());
        });
        setSearchedKeyword(newObj);
        }

    },[searchKeyword]);
    return(
        <div className="mainContainer">
            <AddExpense name={expenseName} setName={setExpenseName} amount={expenseAmount} setAmount={setExpenseAmount} category={expenseCategory} setCategory={setExpenseCategory} date={expenseDate} setDate={setExpenseDate} showExpense={showExpense} edit={edit} editData={editData}/>
            <Search searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} searchedKeyword={searchedKeyword}/>
            <ExpensesList expense={expense} getDelete={getDelete} Editing={Editing}/>
        </div>
    )
}
export default FunctionalSection;