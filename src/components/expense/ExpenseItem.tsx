import Button from "../ui/Button";

type ExpenseItemProps = {
    expense: number;
    key: number;
}

const ExpenseItem = ({ expense, key } : ExpenseItemProps) => {

    const handleDelete = () => {
        // Delete value into expenses Array
        // set New values
        console.log('delete');
    }

    return ( 
        <div key={key} className="bg-slate-100 p-4 rounded-md mb-1">
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