import React from 'react'

const FromCurrency = (props) => {
  const { keyCurrencies, amount, handleChange } = props

  return (
    <div>
      <input
        type='number'
        className='inputAmount'
        value={amount}
        name='amount'
        onChange={handleChange}
      />
      <select
        onChange={handleChange}
        name='fromCurrency'
        className='selectFromCurrency'
      >
        {keyCurrencies.map((option, index) => {
          return <option key={index}>{option}</option>
        })}
      </select>
    </div>
  )
}

export default FromCurrency
