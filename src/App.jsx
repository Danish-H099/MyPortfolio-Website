import './App.css'
import About from './components/About'
import Chatbot from './components/Chatbot'
import ChatboxIcon from './components/ChatboxIcon'
import Contact from './components/Contact'
import Header from './components/Header'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <>
      <div>
        <ChatboxIcon />
        <Header />
        <About />
        <Portfolio />
        <Contact />
        <Chatbot />
      </div>
    </>
  )
}

export default App
