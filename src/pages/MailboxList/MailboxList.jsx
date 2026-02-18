import {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import axios from "axios"


const VITE_API_URL = import.meta.env.VITE_API_URL

function MailboxList(){
    const [mailboxes, setMailboxes] = useState([])


    useEffect(() => {
        async function fetchMailboxes() {
            try {
                const response = await axios.get(`${VITE_API_URL}/mailboxes`)
                setMailboxes(response.data)
            } catch (err){
                console.log(err)
            }
        }

        fetchMailboxes()
    }, []) //important -> runs once when the component mounts

    return (
        <div>
            <h1>All Mailboxes</h1>

            {mailboxes.map((mailbox) => (
                <div key={mailbox._id}>
                    <Link to={`/mailboxes/${mailbox._id}`}><h3>{mailbox.owner}</h3></Link>
                    <p>Size: {mailbox.size}</p>
                </div>
            ))}
        </div>
    )
}

export default MailboxList