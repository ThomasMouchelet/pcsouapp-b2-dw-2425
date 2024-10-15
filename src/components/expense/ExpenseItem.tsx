import Button from "../ui/Button";

type ExpenseItemProps = {
    expense: number;
    index: number;
    expenses: number[];
    setExpenses: (expenses: number[]) => void;
}

const ExpenseItem = ({ expense, index, expenses, setExpenses } : ExpenseItemProps) => {

    const handleDelete = () => {
        expenses.splice(index, 1);
        setExpenses([...expenses]);
    }

    return ( 
        <div className="px-6 py-4 rounded-md mb-1 flex justify-between items-center shadow-md">
            {expense}
            <Button 
                text="Delete"
                variant="danger"
                onClick={handleDelete}
            />
        </div>
     );
}
 
export default ExpenseItem;