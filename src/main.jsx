import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
// Custom Compoents
import App from './App.jsx'

// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CookiesProvider defaultSetCookies={{ path: '/' }}>
    <App />
  </CookiesProvider>
  </BrowserRouter>
)
