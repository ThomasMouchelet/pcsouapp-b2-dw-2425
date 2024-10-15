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
    <>
      <div>
        <form 
          onSubmit={handleSubmit} 
          className=""
        >
          <Input
            type="number"
            placeholder="Exemple: 300€"
            className='mr-2'
            setValue={setExpenseInput}
          />

          <Button
            text="Ajouter"
            type="submit"
          />
        </form>
      </div>

      <div>
        {expenses.map((expense, index) => <ExpenseItem expense={expense} key={index} />)}
      </div>
    </>
  )
}

export default App
