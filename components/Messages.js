import React from 'react'
import Button from './Button'

import Heading from './Heading'
import Section from './Section'

function Messages() {
  return (
    <Section>
      <Heading>Doa dan Pesan</Heading>
      <div className="w-full border rounded-xl border-brownsecondary h-[40vh] max-w-xl mx-auto">
        ...
      </div>
      <Button className="mt-4">Kirim Doa</Button>
    </Section>
  )
}

export default Messages
