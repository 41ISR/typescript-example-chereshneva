import type { IExpense } from "../App"

interface IExpanceCardProps extends IExpense {
    necessary?: boolean,
    HandleDelite: (id: number) => void
}




export const ExpenseCard = ({id, title, category, amount, necessary, HandleDelite}: IExpanceCardProps) => {
    
    return (
        <div onClick={() => HandleDelite(id)} className={`expense${necessary ? " expense--necessary" : ""}`}>
        <div>
            {title}
            <div className="category">{category}</div>
        </div>
        <div className="amount">${amount}</div>
    </div>
    )
}

