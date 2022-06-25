import React from 'react'

import Button from './Button'
import Heading from './Heading'
import LightText from './LightText'
import Section from './Section'

const MESSAGES = [
  {
    id: '1',
    sender: 'John Doe',
    message:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, adipisci!',
  },
  {
    id: '2',
    sender: 'John Doe',
    message:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, adipisci!',
  },
  {
    id: '3',
    sender: 'John Doe',
    message:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, adipisci!',
  },
  {
    id: '4',
    sender: 'John Doe',
    message:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, adipisci!',
  },
  {
    id: '5',
    sender: 'John Doe',
    message:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, adipisci!',
  },
  {
    id: '6',
    sender: 'John Doe',
    message:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, adipisci!',
  },
]

function Message({ id, message, sender }) {
  return (
    <div className="flex flex-col text-sm items-start gap-2 w-full">
      <LightText className="text-justify text-gray-500">{message}</LightText>
      <LightText className="text-right ml-auto text-brownprimary">
        {sender}
      </LightText>
    </div>
  )
}

function Messages() {
  return (
    <Section id="doa">
      <Heading>Doa dan Pesan</Heading>
      <div className="w-full border rounded-xl overflow-y-auto border-brownsecondary h-[45vh] max-w-xl mx-auto flex flex-col gap-6 items-start p-4">
        {MESSAGES.map((message) => (
          <Message
            key={message.id}
            message={message.message}
            sender={message.sender}
          />
        ))}
      </div>
      <Button className="mt-4">Kirim Doa</Button>
    </Section>
  )
}

export default Messages
