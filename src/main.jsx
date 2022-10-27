import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { TaskActionsContextProvider } from "../src/context/TaskActionsContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskActionsContextProvider>
      <App />
    </TaskActionsContextProvider>
  </React.StrictMode>
)
