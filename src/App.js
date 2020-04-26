import React, { Component } from 'react'
import Header from './components/Header'
import axios from 'axios'
import './App.css'
import FromCurrency from './components/FromCurrency'
import ToCurrency from './components/ToCurrency'
import Result from './components/Result'

class App extends Component {
  state = {
    keyCurrencies: [],
    valueCurrencies: [],
    fromCurrency: 'EUR',
    toCurrency: 'AUD',
    amount: 1,
    result: 0,
  }

  componentDidMount() {
    axios.get('https://api.exchangeratesapi.io/latest').then((response) => {
      const baseKey = [response.data.base]

      for (let key in response.data.rates) {
        baseKey.push(key)
      }

      this.setState({
        keyCurrencies: baseKey,
      })
    })
  }

  handleConversion = () => {
    if (this.state.toCurrency !== this.state.fromCurrency) {
      axios
        .get(
          `https://api.exchangeratesapi.io/latest?base=${this.state.fromCurrency}&symbols=${this.state.toCurrency}`
        )
        .then((response) => {
          const result =
            this.state.amount * response.data.rates[this.state.toCurrency]
          this.setState({
            result: result.toFixed(2),
          })
        })
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  render() {
    const { keyCurrencies, result, amount } = this.state

    return (
      <div className='App'>
        <Header />
        <FromCurrency
          keyCurrencies={keyCurrencies}
          amount={amount}
          handleChange={this.handleChange}
        />
        <p className='convertTo'>TO:</p>
        <ToCurrency
          keyCurrencies={keyCurrencies}
          handleChange={this.handleChange}
        />
        <Result handleConversion={this.handleConversion} result={result} />
      </div>
    )
  }
}

export default App
