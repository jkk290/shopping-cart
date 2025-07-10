import { StrictMode } from 'react'
import './index.css'
import router from './assets/routes/routes'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
