import Bye from './components/Bye'
import Counter from './components/Counter'
import Food from './components/food'
import Form from './components/Form'
import Fruits from './components/Fruits'
import Hello from './components/Hello'
import Message from './components/Message'
function App() {
  return (
    <>
    <Hello/>
    {/* Reusability of components */}
    <Bye name='Nisha' phNo='9876543210'/>
    <Bye name='Jan' phNo='9807865432'/>
    <Food/>
    <Fruits/>
    <Message />
    <Counter/>
    <Form/>
    </>
  )
}

export default App
