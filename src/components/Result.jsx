import React from 'react'

const Result = (props) => {
  const { handleConversion, result } = props

  return (
    <div>
      <h4 className='exchangeRateText'>{result}</h4>
      <button onClick={handleConversion} className='convertBtn'>
        Convert
      </button>
    </div>
  )
}

export default Result
