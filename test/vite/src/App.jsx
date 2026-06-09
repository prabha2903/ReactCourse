import Bye from './components/Bye'
import Food from './components/food'
import Fruits from './components/Fruits'
import Hello from './components/Hello'
function App() {
  return (
    <>
    <Hello/>
    {/* Reusability of components */}
    <Bye name='Nisha' phNo='9876543210'/>
    <Bye name='Jan' phNo='9807865432'/>
    <Food/>
    <Fruits/>
    </>
  )
}

export default App
