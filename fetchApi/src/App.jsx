import './App.css'
import ProductList from './components/ProductList'

import { BrowserRouter,Route, Routes } from 'react-router-dom'

function App() {


  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>} />
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
