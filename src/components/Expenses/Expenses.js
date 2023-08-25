import React, {useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(null)

  const selectYearHandler = (year) => {
    setSelectedYear(year)
  }

  let expenses = null
  if (selectedYear) {
    expenses = props.items.filter((item) => {
      return item.date.getFullYear() === selectedYear
    })
  } else {
    expenses = props.items
  }



  return (
    <Card className="expenses">
      <ExpensesFilter onYearSelected={selectYearHandler}/>
      <ExpenseChart expences={expenses}/>
      <ExpenseList expenses={expenses}/>
    </Card>
  );
}

export default Expenses;
