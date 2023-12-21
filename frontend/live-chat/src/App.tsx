import { Container } from "./components/container"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Message } from "./components/message"

function App() {


  return (
    <>
    <Header/>
    <Container>
      <Message/>
    </Container>
     <Footer/>
    </>
  )
}

export default App
