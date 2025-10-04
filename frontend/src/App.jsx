import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      {showSignup ? (
        <Signup onToggleLogin={() => setShowSignup(false)} />
      ) : (
        <Login onToggleSignup={() => setShowSignup(true)} />
      )}
    </>
  )
}

export default App
