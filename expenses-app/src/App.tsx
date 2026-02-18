import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import './App.css'
import { ExpenseCard } from './components/ExpenseCard'
import { Form } from './components/Form'

type TExpenseType = "food" | "transport" | "fun" | ""



export interface IExpense {
  id: number,
  title: string,
  amount: number,
  category: TExpenseType
}

export interface IData {
  title: string,
  amount: string,
  category: TExpenseType
}

export const App = () => {

  const [data, setData] = useState<IData>({
    title: "",
    amount: "",
    category: ""
  })

  const [expenses, setExpenses] = useState<IExpense[]>([
    
  ])

  const HandleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target 

    setData(prev => ({
      ...prev,
      [name]:value
    }))

  }

  const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const expense: IExpense = {
      id: Date.now(),
      title: data.title,
      amount: +data.amount,
      category: data.category
    }
    setExpenses(prev => [...prev, expense])
  }

  const HandleDelite = (id: number) => {
    setExpenses(prev => prev.filter((el) => el.id !== id))
  }

  return (
    <>
      <div className="app">
        <h1>Expense Tracker</h1>
        
        {/* form */}
        <Form HandleFormChange={HandleFormChange} data={data} HandleSubmit={HandleSubmit}/>

        <div className="total">Total: ${expenses.reduce((acc, el) => acc + el.amount, 0)}</div>

        {expenses.map((el) => <ExpenseCard HandleDelite={HandleDelite} key={el.id} necessary={el.category == "food"} {...el}/>)}

      </div>

    </>
  )
}
