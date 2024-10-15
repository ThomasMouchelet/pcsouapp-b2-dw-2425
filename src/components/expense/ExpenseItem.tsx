import { ExpenseType } from "../../types/expense";
import Button from "../ui/Button";

type ExpenseItemProps = {
    expense: ExpenseType;
    index: number;
    expenses: ExpenseType[];
    setExpenses: (expenses: ExpenseType[]) => void;
}

const ExpenseItem = ({ expense, index, expenses, setExpenses } : ExpenseItemProps) => {

    const handleDelete = () => {
        expenses.splice(index, 1);
        setExpenses([...expenses]);
    }

    return ( 
        <div className="px-6 py-4 rounded-md mb-1 flex justify-between items-center shadow-md">
            {expense.amount}€
            <Button 
                text="Delete"
                variant="danger"
                onClick={handleDelete}
            />
        </div>
     );
}
 
export default ExpenseItem;