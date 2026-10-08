import Container from 'react-bootstrap/Container'

export default function Footer() {
  // Show my name and the lab number at the bottom of the app.
  return (
    <footer className="border-top bg-white py-3">
      <Container>
        <p className="mb-0 text-secondary">Danil Hordiienko — Lab 2</p>
      </Container>
    </footer>
  )
}
