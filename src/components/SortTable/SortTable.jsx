import React from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'

function SortTable(props) {
  console.log('SortTable', props)

  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
          {props.list.map((item) => (
            <tr key={nanoid()}>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

SortTable.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ),
}

export default SortTable
