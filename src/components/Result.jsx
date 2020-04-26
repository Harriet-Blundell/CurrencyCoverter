import React from 'react'

const Result = (props) => {
  const { handleConversion, result } = props

  return (
    <div>
      <button onClick={handleConversion}>Convert</button>
      <h4>{result}</h4>
    </div>
  )
}

export default Result
