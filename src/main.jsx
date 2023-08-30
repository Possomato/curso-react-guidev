import React from 'react'
import ReactDOM from 'react-dom/client'

import { PrimeiroComponente } from './components/PrimeiroComponente'
import { ComponentePai } from './components/ComponentePai'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ComponentePai />
  </React.StrictMode>,
)
