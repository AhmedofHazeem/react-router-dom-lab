import {Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <Link className="nav-item" to='/'>Home</Link>
        <Link className="nav-item" to='/mailboxes'>Mailboxes</Link>
        <Link className="nav-item" to='/new-mailbox'>New Mailbox</Link>


    </nav>
  )
}

export default NavBar