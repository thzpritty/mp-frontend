
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Landingpage from './Pages/Landingpage'
import WatchHistory from './Pages/WatchHistory'


function App() {


  return (
    <>
     

      <Header/>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/watch-history' element={<WatchHistory/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
