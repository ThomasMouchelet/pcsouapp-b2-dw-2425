import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { ExpenseType } from "../../types/expense";

type ExpenseFormProps = {
    expenses: ExpenseType[];
    setExpenses: (expenses: ExpenseType[]) => void;
}

const ExpenseForm = ({ expenses, setExpenses } : ExpenseFormProps ) => {
    const [credentials, setCredentials] = useState<ExpenseType>({
        amount: 0,
        category: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setExpenses([
            ...expenses,
            credentials
        ])
    }

    const handleChange = (e: React.ChangeEvent<any>) => {
        const { name, value } = e.target;

        setCredentials({
            ...credentials,
            [name]: value,
        })
    }

    return ( 
        <form 
          onSubmit={handleSubmit} 
          className="w-full"
        >
          <Input
            type="number"
            placeholder="Exemple: 300"
            className='mr-2 w-full'
            handleChange={handleChange}
            name="amount"
          />

          <select 
            className="w-full mt-2 px-4 py-4 border-2 rounded-md" 
            onChange={handleChange}
            name="category"
            defaultValue=""
            >
            <option disabled value="">Select a value</option>
            <option value="Loisirs">Loisirs</option>
            <option value="Alimentation">Alimentation</option>
            <option value="Transport">Transport</option>
          </select>

          <Button
            text="Ajouter"
            type="submit"
            className="w-full mt-2"
          />
        </form>
     );
}
 
export default ExpenseForm;