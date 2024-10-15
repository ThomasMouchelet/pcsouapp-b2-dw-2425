import { useEffect, useState } from "react";
import ExpenseItem from "./components/expense/ExpenseItem";
import { ExpenseType } from "./types/expense";
import ExpenseForm from "./components/expense/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);

  useEffect(() => {
    console.log("Component mounted");
    fetchExpenses()
  }, []);

  const fetchExpenses = async () => {
    const response = await fetch('expenses.json')
    const data = await response.json()
    setExpenses(data)
  }

  return (
    <div className="p-6 flex justify-center items-center flex-col">
      <div className="w-6/12">
        <ExpenseForm 
          expenses={expenses}
          setExpenses={setExpenses}
        />
      </div>

      <div className="mt-6 w-6/12">
        {expenses.map((expense, index) => 
          <ExpenseItem 
            expense={expense} 
            index={index} 
            key={index}
            expenses={expenses}
            setExpenses={setExpenses}
          />
        )}
      </div>
    </div>
  )
}

export default App
