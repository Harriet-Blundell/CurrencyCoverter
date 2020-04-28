import React from 'react'

const FromCurrency = (props) => {
  const { keyCurrencies, fromCurrency, amount, handleChange } = props

  return (
    <div className='fromCurrencyFlex'>
      <div className='inputDiv'>
        <input
          type='number'
          className='inputAmount'
          value={amount}
          name='amount'
          onChange={handleChange}
        />
      </div>
      <div>
        <select
          onChange={handleChange}
          name='fromCurrency'
          className='selectFromCurrency'
          value={fromCurrency}
        >
          {keyCurrencies.map((option, index) => {
            return <option key={index}>{option}</option>
          })}
        </select>
      </div>
    </div>
  )
}

export default FromCurrency
