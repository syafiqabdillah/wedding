import React, { useEffect } from 'react'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faPencil } from '@fortawesome/free-solid-svg-icons'

import Button from './Button'
import Heading from './Heading'
import LightText from './LightText'
import Section from './Section'

function Message({ message, sender }) {
  return (
    <div
      className="flex flex-col text-sm items-start gap-2 w-full border-b pb-4"
      data-aos="fade-left"
      data-aos-offset="0"
    >
      <LightText className="text-justify text-gray-500">
        &ldquo;{message}&rdquo;
      </LightText>
      <LightText className="text-right ml-auto text-themeprimary">
        {sender}
      </LightText>
    </div>
  )
}

function Form({ setShowForm }) {
  const [text, setText] = React.useState('')
  const [sender, setSender] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  function isFormValid() {
    return text.length > 0 && sender.length > 0
  }

  async function submitMessage() {
    if (!isFormValid()) return null
    setLoading(true)
    try {
      await axios.post('https://afifasyafiq-api.herokuapp.com/message', {
        sender,
        text,
      })
    } catch (err) {
    } finally {
      setLoading(false)
      setShowForm(false)
    }
  }

  useEffect(() => {
    document.getElementById('input-sender').focus()
  }, [])

  return (
    <div className=" w-full max-w-xl mx-auto p-3">
      <form className="flex flex-col items-start text-left gap-6">
        <div className="flex flex-col gap-2 items-start w-full">
          <LightText>Dari</LightText>
          <input
            type="text"
            className="border-2 focus:outline-none focus:border-themeprimary text-sm font-extralight text-themetext px-2 py-2 w-full"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            disabled={loading}
            id="input-sender"
          />
        </div>
        <div className="flex flex-col gap-2 items-start w-full">
          <LightText>Pesan</LightText>
          <textarea
            className="border-2 focus:border-themeprimary text-sm font-extralight text-themetext focus:outline-none px-2 py-1 w-full"
            value={text}
            rows={4}
            onChange={(e) => setText(e.target.value)}
            disabled={loading}
          />
        </div>
        <Button
          className="mx-auto flex gap-3 items-center"
          onClick={() => submitMessage()}
          disabled={text == '' || sender == ''}
        >
          {loading ? (
            'Mengirimkan pesan...'
          ) : (
            <React.Fragment>
              <FontAwesomeIcon className="h-4" icon={faPaperPlane} /> Kirim
              Pesan
            </React.Fragment>
          )}
        </Button>
        <LightText
          className="underline cursor-pointer w-full text-center text-sm tracking-wider"
          onClick={() => setShowForm(false)}
        >
          Kembali
        </LightText>
      </form>
    </div>
  )
}

function Messages() {
  const [messages, setMessages] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [showForm, setShowForm] = React.useState(false)

  function onClickKirimDoa() {
    setShowForm(true)
  }

  async function fetchMessages() {
    try {
      const resp = await axios('https://afifasyafiq-api.herokuapp.com/message')
      setMessages(resp.data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    fetchMessages()
  }, [showForm])

  return (
    <Section id="doa">
      <Heading>Pesan</Heading>
      {!showForm && (
        <div className="w-full rounded-xl overflow-x-hidden overflow-y-auto border-themesecondary mb-4 max-h-[45vh] max-w-xl mx-auto flex flex-col gap-6 items-start p-4">
          {loading ? (
            <LightText>Loading...</LightText>
          ) : (
            messages.map((message) => (
              <Message
                key={message._id}
                message={message.text}
                sender={message.sender}
              />
            ))
          )}
        </div>
      )}
      {showForm && <Form setShowForm={setShowForm} />}
      {!showForm && (
        <Button
          className="mt-4 flex gap-3 items-center"
          onClick={onClickKirimDoa}
        >
          <FontAwesomeIcon icon={faPencil} className="h-4" /> Tulis Pesan
        </Button>
      )}
    </Section>
  )
}

export default Messages
