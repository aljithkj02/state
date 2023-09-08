
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './reduxToolkit/productState.js'
import productSaga from './saga/productSaga.js'

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    data: productsReducer
  },
  middleware: [saga]
})

saga.run(productSaga);


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </BrowserRouter>
)
