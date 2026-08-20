import './App.css'
import FunctionalSection from './Components/FunctionalSection.jsx'
import Navbar from './Components/Navbar.jsx'
import TotalSpending from './Components/TotalSpending.jsx'
import {useState} from 'react'
function App(){
  const [amount,setAmount]=useState(0);
  const [numberExpense,setTotalNumber]=useState(0);
  const [highestExpense,setHighestExpense]=useState(0);
  return(
    <div>
    <Navbar title="Expense Tracker"/>
    <TotalSpending Amount={amount} totalNumber={numberExpense} highestExpense={highestExpense}/>
    <FunctionalSection totalAmount={amount} setTotalAmount={setAmount} setTotalNumber={setTotalNumber} highestExpense={highestExpense} setHighestExpense={setHighestExpense}/>
    </div>
  );
}
export default App;