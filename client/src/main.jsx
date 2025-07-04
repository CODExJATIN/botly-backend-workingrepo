import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'botly-bot/dist/botly-bot.css';
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
import { BrowserRouter } from 'react-router-dom';

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>,
)
