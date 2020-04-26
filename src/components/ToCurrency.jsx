import React from 'react'

const ToCurrency = (props) => {
  const { keyCurrencies, handleChange } = props

  keyCurrencies.sort()

  return (
    <div>
      <select
        onChange={handleChange}
        name='toCurrency'
        className='selectToCurrency'
      >
        {keyCurrencies.map((option, index) => {
          return <option key={index}>{option}</option>
        })}
      </select>
    </div>
  )
}

export default ToCurrency
