import React from 'react'
import ReactDOM from 'react-dom'
import {injectGlobal} from 'styled-components'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

injectGlobal`
  html {
    position: relative;
    height: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
