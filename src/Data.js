import moment from 'moment'
import { nanoid } from 'nanoid'

export default class Data {
  constructor(list) {
    this.current = '2018'
    this.list = list.list
    this.data = {}
  }

  sortList() {
    this.data.sortList = this.list.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      }
      return -1
    })
  }

  addId() {
    this.data.sortList.forEach((el) => (el.id = nanoid()))
  }

  addValues() {
    const dateWithValues = this.data.sortList.map((el) => {
      const separatedDate = el.date.split('-')
      return { ...el, year: separatedDate[0], month: separatedDate[1] }
    })

    this.data.months = this.replaceMonthsNamed(this.addValue(dateWithValues, 'month'))
    this.data.years = this.addValue(dateWithValues, 'year')
    this.addId()
  }

  addValue(arr, value) {
    const result = []

    arr.forEach((el) => {
      if (value === 'month' && el.year !== this.current) {
        return
      }

      const index = result.findIndex((e) => e[value] === el[value])

      if (index !== -1) {
        result[index].amount += el.amount
        return
      }

      result.push({ [value]: el[value], amount: el.amount })
    })

    return result
  }

  replaceMonthsNamed(arr) {
    const result = arr.map((el) => {
      return {
        ...el,
        month: moment(`${this.current}${el.month}01`).format('MMMM').substring(0, 3),
      }
    })
    return result.reverse()
  }

  getData() {
    this.sortList()
    this.addValues()

    return this.data
  }
}
