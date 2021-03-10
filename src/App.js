import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import './App.css'
import MonthTable from './components/MonthTable/MonthTable'
import SortTable from './components/SortTable/SortTable'
import WithSort from './components/WithSort/WithSort'
import YearTable from './components/YearTable/YearTable'
import Data from './Data'

const SortMonths = WithSort(MonthTable, 'months')
const SortYears = WithSort(YearTable, 'years')
const SortTableData = WithSort(SortTable)

function App() {
  const [list, setList] = useState('')
  const [loading, setLoading] = useState('')
  const [error, setError] = useState('Data empty')

  const result = !list
    ? error
    : [
        <SortMonths key={nanoid()} {...list} />,
        <SortYears key={nanoid()} {...list} />,
        <SortTableData key={nanoid()} {...list} />,
      ]

  useEffect(() => {
    const loadData = async () => {
      setLoading('')
      setError('Data empty')
      try {
        console.log(process.env.REACT_APP_URL_DATA)
        const response = await fetch(process.env.REACT_APP_URL_DATA, { method: 'GET' })

        if (response.status === 200 && response.ok) {
          const json = await response.json()
          setError('')
          setList(new Data(json).getData())
        }
      } catch (e) {
        console.error(e)
      } finally {
        setLoading('')
      }
    }

    loadData()
  }, [loading])

  return (
    <div className="App" id="app">
      {loading}
      {result}
    </div>
  )
}

export default App
