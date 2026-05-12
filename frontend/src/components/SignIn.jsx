import React, { useState } from 'react'

const API_URL = 'http://localhost:5000/api/auth';

function SignIn({ onLogin }) {
  const [form, setForm] = useState({ login: '', password: '' })
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`${API_URL}/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (data.success) {
        onLogin(data.username)
      } else {
        setMessage(data.message)
      }
    } catch (err) {
      setMessage('Server error')
    }
  }

  return (
    <div style={styles.container}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email or Username" onChange={e => setForm({ ...form, login: e.target.value })} required />
        <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} required />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

const styles = {
  container: { maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }
}

export default SignIn