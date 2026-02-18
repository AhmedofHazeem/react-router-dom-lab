import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import axios from "axios"

const API_URL = import.meta.env.API_URL


function MailboxDetails() {
    const {mailboxId} = useParams()
    const [mailbox, setMailbox] = useState(null)

    useEffect(() => {
            async function fetchMailboxes() {
                try {
                    const response = await axios.get(`${API_URL}/mailboxes`)
                    setMailbox(response.data)
                } catch (err){
                    console.log(err)
                }
            }
    
            fetchMailboxes()
        }, [mailboxId])

        if (!mailbox) return <p>Loading...</p>

        return (
            <div>
                <h1>Mailbox details</h1>
                <p><strong>Owner:</strong>{mailbox.owner}</p>
                <p><strong>Size:</strong>{mailbox.size}</p>
                <p><strong>ID:</strong>{mailbox._id}</p>
            </div>
        )
}

export default MailboxDetails