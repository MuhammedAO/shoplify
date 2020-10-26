import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen/>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App
