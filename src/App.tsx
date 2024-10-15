import { useEffect, useState } from "react";
import Input from "./components/ui/Input";
import Button from "./components/ui/Button";
import ExpenseItem from "./components/expense/ExpenseItem";
import { ExpenseType } from "./types/expense";

function App() {
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);
  const [expenseInput, setExpenseInput] = useState<number | null>(null);

  useEffect(() => {
    console.log("Component mounted");
    fetchExpenses()
  }, []);

  const fetchExpenses = async () => {
    const response = await fetch('expenses.json')
    const data = await response.json()
    console.log(data)
    setExpenses(data)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!expenseInput) return

    const expense = {
      amount: expenseInput,
      category: "Test"
    }

    setExpenses([
      ...expenses,
      expense
    ]);
  }

  return (
    <div className="p-6 flex justify-center items-center flex-col">
      <div className="w-6/12">
        <form 
          onSubmit={handleSubmit} 
          className="w-full"
        >
          <Input
            type="number"
            placeholder="Exemple: 300€"
            className='mr-2 w-full'
            setValue={setExpenseInput}
          />

          <Button
            text="Ajouter"
            type="submit"
            className="w-full mt-2"
          />
        </form>
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
