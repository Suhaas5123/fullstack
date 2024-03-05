import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './App/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    {/* <Booking/> */}
    </Provider>
    {/* <NavBar/> */}
    </React.StrictMode>
)
