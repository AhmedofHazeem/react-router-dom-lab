import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const VITE_API_URL = import.meta.env.VITE_API_URL

function MailboxDetails() {

  const { mailboxId } = useParams()
  const [mailbox, setMailbox] = useState(null)

  useEffect(() => {
    async function fetchMailbox() {
      try {
        const response = await axios.get(`${VITE_API_URL}/mailboxes/${mailboxId}`)
        setMailbox(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchMailbox()
  }, [mailboxId])

  if (!mailbox) return <p>Loading...</p>

  return (
    <div>
      <h1>Mailbox Details</h1>
      <p><strong>Owner:</strong> {mailbox.owner}</p>
      <p><strong>Size:</strong> {mailbox.size}</p>
      <p><strong>ID:</strong> {mailbox._id}</p>
    </div>
  )
}

export default MailboxDetails
