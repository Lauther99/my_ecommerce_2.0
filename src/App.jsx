import { useSelector } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import LoadingScreen from './components/LoadingScreen'
import Login from './pages/Login'
import NavBar from './components/NavBar'
import ProductDetail from './pages/ProductDetail'
import ProtectedRoutes from './components/ProtectedRoutes'
import Purchases from './pages/Purchases'

function App() {
  const isLoading = useSelector(state => state.isLoading);

  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        {isLoading && <LoadingScreen />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='purchases' element={<Purchases />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
