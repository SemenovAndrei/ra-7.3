import React from 'react'
import PropTypes from 'prop-types'

function SortTable(props) {
  console.log('SortTable', props)

  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <tr>
          <th>Date</th>
          <th>Amount</th>
        </tr>
        {props.list.map((item) => (
          <tr>
            <td>{item.date}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

SortTable.propTypes = {}

export default SortTable
