import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import WalletAdapter from './utils/WalletAdapter.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <WalletAdapter>
      <App/>
    </WalletAdapter>
  </BrowserRouter>
)
