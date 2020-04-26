import React, { Component } from 'react'
import Header from './components/Header'
import axios from 'axios'
import './App.css'
import FromCurrency from './components/FromCurrency'
import ToCurrency from './components/ToCurrency'

class App extends Component {
  state = {
    keyCurrencies: [],
    valueCurrencies: [],
    fromCurrency: 'EUR',
    toCurrency: 'AUD',
    currentExchangeRate: '1.6943',
    amount: 1,
  }

  componentDidMount() {
    axios.get('https://api.exchangeratesapi.io/latest').then((response) => {
      const baseKey = [response.data.base]

      for (let key in response.data.rates) {
        baseKey.push(key)
      }

      this.setState({
        keyCurrencies: baseKey,
        valueCurrencies: response.data.rates,
      })
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
      currentExchangeRate: this.state.valueCurrencies[value],
    })
  }

  render() {
    const { keyCurrencies, currentExchangeRate, amount } = this.state

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
          currentExchangeRate={currentExchangeRate}
        />
      </div>
    )
  }
}

export default App
