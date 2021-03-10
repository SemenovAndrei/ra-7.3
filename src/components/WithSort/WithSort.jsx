import React from 'react'
import PropTypes from 'prop-types'

function WithSort(Component, type = 'sortList') {
  return function (props) {
    return <Component list={props[type]} />
  }
}

WithSort.propTypes = {
  list: PropTypes.shape({
    months: PropTypes.arrayOf({
      month: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
    years: PropTypes.shape({
      year: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
    }),
    sortList: PropTypes.shape({
      date: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  }),
}

export default WithSort
