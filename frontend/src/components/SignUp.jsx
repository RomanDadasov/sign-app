import React, { useState } from 'react'

const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:5162/api/auth'
  : 'http://localhost:5000/api/auth';

function SignUp() {
  const [form, setForm] = useState({ username: '', email: '', password: '', confirmPassword: '' })
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      setMessage('Passwords do not match')
      return
    }
    try {
      const res = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      setMessage(data.message)
      if (res.ok) setForm({ username: '', email: '', password: '', confirmPassword: '' })
    } catch (err) {
      setMessage('Server error')
    }
  }

  return (
    <div style={styles.container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} required />
        <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
        <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required />
        <input type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={e => setForm({ ...form, confirmPassword: e.target.value })} required />
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

const styles = {
  container: { maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }
}

export default SignUp