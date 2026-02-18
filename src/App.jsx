import {Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar"
import MailboxList from "./pages/MailboxList/MailboxList"
import MailboxForm from './pages/MailBoxForm/MailboxForm'
import MailboxDetails from "./pages/MailboxDetails/MailboxDetails"


//dont forget to add the index.css from the lab

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>}></Route>
        <Route path='/mailboxes' element={<MailboxList/>}></Route>
        <Route path='/new-mailbox' element={<MailboxForm/>}></Route>
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails/>}></Route>

      </Routes>
    </div>
  )
}

export default App