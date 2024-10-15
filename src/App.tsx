import { useState } from "react";
import Input from "./components/ui/Input";
import Button from "./components/ui/Button";
import ExpenseItem from "./components/expense/expenseItem";

function App() {
  const [expenses, setExpenses] = useState<number[]>([300, 40, 100, 200]);
  const [expenseInput, setExpenseInput] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!expenseInput) return

    setExpenses([
      ...expenses,
      Number(expenseInput)
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
