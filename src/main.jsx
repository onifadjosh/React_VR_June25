import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Fish from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import lizzy from './redux/appSlice.js'

export const store = configureStore({
  reducer:lizzy
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Fish />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
