import React from 'react'

function Welcome({ username }) {
  return (
    <div style={styles.container}>
      <h1>Welcome, {username}! 🎉</h1>
      <p>You have successfully logged in.</p>
    </div>
  )
}

const styles = {
  container: { textAlign: 'center', marginTop: '50px', padding: '20px', backgroundColor: '#e8f5e9', borderRadius: '8px' }
}

export default Welcome