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
import User from './pages/User'
import SignUp from './pages/SignUp'
import Footer from './components/Footer'

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
          <Route path='signup' element={<SignUp />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='purchases' element={<Purchases />} />
            <Route path='user' element={<User />} />
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
