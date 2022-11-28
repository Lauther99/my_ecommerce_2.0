import { useSelector } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import LoadingScreen from './components/LoadingScreen'
import Login from './components/Login'
import NavBar from './components/NavBar'
import ProductDetail from './components/ProductDetail'
import Purchases from './components/Purchases'

function App() {
  const isLoading = useSelector(state => state.isLoading);

  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        {isLoading && <LoadingScreen />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='purchases' element={<Purchases />} />
          <Route path='login' element={<Login />} />
          <Route path='/product/:id' element={<ProductDetail />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
