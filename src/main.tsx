import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Subscribe } from '@react-rxjs/core'

ReactDOM.render(
  <React.StrictMode>
    <Subscribe>
      <App />
    </Subscribe>
  </React.StrictMode>,
  document.getElementById('root')
)
