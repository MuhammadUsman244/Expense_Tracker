import './TotalSpending.css'
function TotalSpending({Amount,totalNumber,highestExpense}){
    return(
        <div className="spendingCard">
            <div>
            <h1>Total Spending</h1>
            <p>Rs. <strong>{Amount}</strong></p>
            <p>No. <strong>{totalNumber}</strong></p>
            <p>Highest. {highestExpense}</p>
            </div>
        </div>
    )
}
export default TotalSpending;