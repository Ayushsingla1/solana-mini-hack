// import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Homepage from './pages/Homepage'
import Sender from './pages/Sender'
import RecievingPage from './pages/Receiver'
function App() {

  return (
    <Routes>
      <Route element = {<Home/>}>
        <Route index element = {<Homepage/>}/>
        <Route path='/sender' element = {<Sender/>}/>
        <Route path='/receive/:hash' element = {<RecievingPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
