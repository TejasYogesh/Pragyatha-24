import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/mainPages/Home.jsx'
import App from './App.jsx'
import './index.css'
import ErrorPage from './Pages/mainPages/ErrorPage.jsx'
import Contact from './Pages/mainPages/Contact.jsx'
import Pragyatha from './Pages/mainPages/Pragyatha.jsx'
import Events from './Pages/mainPages/Events.jsx'
import Adspize from './Pages/Adspize.jsx'
import Crackathon from './Pages/Crackathon.jsx'
import Cyber from './Pages/Cyber.jsx'
import Entrorphosis from './Pages/Entrorphosis.jsx'
import Git from './Pages/git.jsx'
import Uiux from './Pages/uiux.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    // errorElement: <ErrorPage />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/Events',
    element: <Events />
  },
  {
    path: '/pragyatha',
    element: <Pragyatha />
  }

  // Events Individual Routing
  , {
    path: '/adspize',
    element: <Adspize />
  },
  {
    path: '/git',
    element: <Git />
  },
  {
    path: '/Uiux',
    element: <Uiux />
  },
  {
    path: '/entrorphosis',
    element: <Entrorphosis />
  },
  {
    path: '/cyber',
    element: <Cyber />
  },
  {
    path: '/crackathon',
    element: <Crackathon />
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />
  </StrictMode>,
)
