import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Users from './components/Users/Users.jsx'
import Update from './components/Update/Update.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch('http://localhost:7000/users')
  },
  {
    path: '/users/:id',
    element: <Update></Update>,
    loader: ({params})=>fetch(`http://localhost:7000/users/${params.id}`)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
