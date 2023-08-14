// CSS imports
import './App.css'

// Custom components
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainRoutes from './routes/MainRoutes'
function App() {

  return (
    <div className="app-wrapper">
      {/* Common header for all pages */}
      <Header 
        color="light" 
        light={true} 
        expand="md" 
        container="md"
      />

      <MainRoutes />

      {/* Common footer for all pages */}
      <Footer />
    </div>
  )
}

export default App
