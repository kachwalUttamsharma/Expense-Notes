import React, { useState } from "react";
import ExpenseList from "./ExpensesList/ExpenseList";
import ExpensesFilter from "./Filter/ExpensesFilter";
import ExpensesChart from "./ExpenseChart/ExpensesChart";
import "./Expense.css";
import Card from "../UI/Card";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (filterValue) => {
    setFilteredYear(filterValue);
  };

  const filteredExpenses = props.expense.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterChange={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expense;
