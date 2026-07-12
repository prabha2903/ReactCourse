import Bye from './components/Bye'
import Counter from './components/Counter'
import Food from './components/food'
import Form from './components/Form'
import Fruits from './components/Fruits'
import Hello from './components/Hello'
import Message from './components/Message'
import Ue1 from './components/Ue1'

import { UserContext } from "./UserContext";

function App() {

  const user = "Prabha";

  return (
    <UserContext.Provider value={user}>
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
        <Ue1/>
      </>
    </UserContext.Provider>
  )
}

export default App;