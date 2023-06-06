import { Route, Routes } from 'react-router-dom'
import Navbar from './componenets/Navbar'
import ChatRoom from './pages/ChatRoom'
import Login from './pages/Login'
import { PrivateRoute } from './routes/PrivateRoute'
import { AuthProvider } from './context/AuthContext'


function App() {


  return (
    <AuthProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/chat' element={<PrivateRoute><ChatRoom /></PrivateRoute>} />
        </Routes>
      </div>

    </AuthProvider>
  )
}

export default App
