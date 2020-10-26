import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="py-3">
        <Container>
          <h1>shoplify</h1>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App
