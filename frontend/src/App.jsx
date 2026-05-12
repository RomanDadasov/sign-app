import React, { useState } from 'react'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Welcome from './components/Welcome'

function App() {
  const [page, setPage] = useState('signin')
  const [user, setUser] = useState(null)

  if (user) return <Welcome username={user} />

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button onClick={() => setPage('signin')}>Sign In</button>
        <button onClick={() => setPage('signup')}>Sign Up</button>
      </div>
      {page === 'signin' && <SignIn onLogin={setUser} />}
      {page === 'signup' && <SignUp />}
    </div>
  )
}

export default App