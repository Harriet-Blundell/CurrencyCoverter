import React from 'react'

const ToCurrency = (props) => {
  const { keyCurrencies, toCurrency, handleChange } = props

  return (
    <div>
      <select
        onChange={handleChange}
        name='toCurrency'
        className='selectToCurrency'
        value={toCurrency}
      >
        {keyCurrencies.map((option, index) => {
          return <option key={index}>{option}</option>
        })}
      </select>
    </div>
  )
}

export default ToCurrency
