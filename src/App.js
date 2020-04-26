import React, { Component } from 'react'
import Header from './components/Header'
import axios from 'axios'
import './App.css'
import FromCurrency from './components/FromCurrency'

class App extends Component {
  state = {
    keyCurrencies: [],
    fromCurrency: 'EUR',
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
      })
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { keyCurrencies, amount } = this.state

    return (
      <div className='App'>
        <Header />
        <FromCurrency
          keyCurrencies={keyCurrencies}
          amount={amount}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

export default App
