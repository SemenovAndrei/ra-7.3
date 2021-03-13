import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import './App.css'
import MonthTable from './components/MonthTable/MonthTable'
import SortTable from './components/SortTable/SortTable'
import WithSort from './components/WithSort/WithSort'
import YearTable from './components/YearTable/YearTable'
import Data from './Data'
import load from './Loading_icon.gif'

const SortMonths = WithSort(MonthTable, 'months')
const SortYears = WithSort(YearTable, 'years')
const SortTableData = WithSort(SortTable)

function App() {
  const [list, setList] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const result = !list ? (
    <h3>{error}</h3>
  ) : (
    [
      <SortMonths key={nanoid()} {...list} />,
      <SortYears key={nanoid()} {...list} />,
      <SortTableData key={nanoid()} {...list} />,
    ]
  )

  useEffect(() => {
    const loadData = async () => {
      setError('')
      setLoading(true)
      try {
        const response = await fetch(process.env.REACT_APP_URL_DATA, { method: 'GET' })

        if (response.status === 200 && response.ok) {
          const json = await response.json()

          setError('')
          setList(new Data(json).getData())
        }
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return (
    <div className="App" id="app">
      {loading && <img className="load-spinner" src={load} alt="loader" />}
      {result}
    </div>
  )
}

export default App
