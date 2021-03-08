import { useEffect, useState } from 'react'
import './App.css'
import MonthTable from './components/MonthTable/MonthTable'
import SortTable from './components/SortTable/SortTable'
import YearTable from './components/YearTable/YearTable'

// TODO:
// 1. Загрузите данные с помощью fetch: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json
// 2. Не забудьте вынести URL в переменные окружения (не хардкодьте их здесь)
// 3. Положите их в state

// export default class App extends React.Component {
//   state = {
//       list: []
//   };

//   render() {
//       const {list} = this.state;
//       return (
//           <div id="app">
//               <MonthTable list={list} />
//               <YearTable list={list} />
//               <SortTable list={list} />
//           </div>
//       );
//   }
// }

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(process.env.REACT_APP_URL_DATA)
      console.log(response)
      const json = await response.json()
      setList(json)
    }
    loadData()
  }, [])

  return (
    <div className="App" id="app">
      <MonthTable list={list} />
      <YearTable list={list} />
      <SortTable list={list} />
    </div>
  )
}

export default App
