import ExpenseItem from "./ExpenseItem"

export function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map(expense =>
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )}
    </div>
  )
}