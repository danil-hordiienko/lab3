import { useState } from 'react'

export default function Content() {
  // Save the time when the Home page opens; it does not update every second.
  const [currentTime] = useState(() => new Date().toLocaleTimeString())

  return (
    <section>
      <h1>Hello World!</h1>
      <h2>It is {currentTime}.</h2>
    </section>
  )
}
