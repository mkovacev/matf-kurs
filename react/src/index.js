import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import App from './components/App'
import * as ServiceWorker from './ServiceWorker.js'

ReactDom.render(<App />, document.getElementById('root'))

ServiceWorker.unregister()
