import type { ChangeEvent, FormEvent } from "react"
import type { IData} from "../App"

export interface IFormProps{
    data: IData,
    HandleFormChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    HandleSubmit: (e: FormEvent<HTMLFormElement>) => void
  }


export const Form = ({data, HandleFormChange,  HandleSubmit}: IFormProps) => {
    return(
        <form className="form" onSubmit={HandleSubmit}>
          <input onChange={HandleFormChange} value={data.title} type="text" placeholder="Expense title" name="title" />
          <input onChange={HandleFormChange} value={data.amount} type="number" placeholder="Amount" name="amount" />
          <select onChange={HandleFormChange} value={data.category} name="category">
            <option value="" >Select category</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="fun">Fun</option>
          </select>
          <button>Add Expense</button>
        </form>
    )
}