import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

// Custom Compoents
import App from './App.jsx'

// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
