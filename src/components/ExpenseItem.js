import "./ExpenseItem.css";

export default function ExpenseItem() {
  const exppenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurence";
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>March 28th 2023</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$289.23</div>
      </div>
    </div>
  );
}
