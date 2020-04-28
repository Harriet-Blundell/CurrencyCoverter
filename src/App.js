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
    fromCurrency: 'EUR',
    toCurrency: 'GBP',
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
    if (this.state.fromCurrency !== this.state.toCurrency) {
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
    } else if (this.state.fromCurrency === this.state.toCurrency) {
      this.setState({
        result: this.state.amount,
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
    const {
      keyCurrencies,
      fromCurrency,
      toCurrency,
      result,
      amount,
    } = this.state

    return (
      <div className='App'>
        <Header />
        <FromCurrency
          keyCurrencies={keyCurrencies}
          amount={amount}
          handleChange={this.handleChange}
          fromCurrency={fromCurrency}
        />
        <p className='convertTo'>TO:</p>
        <ToCurrency
          keyCurrencies={keyCurrencies}
          handleChange={this.handleChange}
          toCurrency={toCurrency}
        />
        <Result handleConversion={this.handleConversion} result={result} />
      </div>
    )
  }
}

export default App
