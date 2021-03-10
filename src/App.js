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
  const [list, setList] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      console.log('fetch')
      const response = await fetch(process.env.REACT_APP_URL_DATA, { method: 'GET' })
      console.log(response)
      const json = await response.json()
      setList(new Data(json).getData())
    }

    loadData()
  }, [])

  return (
    <div className="App" id="app">
      {list && <SortMonths {...list} />}
      {list && <SortYears {...list} />}
      {list && <SortTableData {...list} />}
    </div>
  )
}

export default App
