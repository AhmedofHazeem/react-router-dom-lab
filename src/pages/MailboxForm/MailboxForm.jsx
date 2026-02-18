import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const API_URL = import.meta.env.API_URL

function MailboxForm() {

  const [formData, setFormData] = useState({
    owner: "",
    size: "",
  })

  const navigate = useNavigate()

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      await axios.post(`${API_URL}/mailboxes`, formData)
      navigate("/mailboxes")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>New Mailbox</h1>

      <form onSubmit={handleSubmit}>

        <label>Owner:</label>
        <input
          type="text"
          name="owner"
          value={formData.owner}
          onChange={handleChange}
        />

        <label>Size:</label>
        <input
          type="text"
          name="size"
          value={formData.size}
          onChange={handleChange}
        />

        <button type="submit">Create Mailbox</button>

      </form>
    </div>
  )
}

export default MailboxForm
