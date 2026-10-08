import { Route, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Content from './components/Content.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import Read from './components/Read.jsx'
import Create from './components/Create.jsx'
import './App.css'

export default function App() {
  // Put the navigation, page content and footer together.
  return (
    <div className="app">
      <NavigationBar />
      <Container as="main" className="py-5">
        {/* Match the URL to the Home, Read or Create page. */}
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/read" element={<Read />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Container>
      {/* Keep the same footer on all three pages. */}
      <Footer />
    </div>
  )
}
