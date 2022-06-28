import React, { useState, useEffect } from 'react'

function Item(props) {
  return <div className="w-8 text-sm font-bold">{props.children}</div>
}

function Divider(props) {
  return <div className="text-sm">:</div>
}

function Counter() {
  const [now, setNow] = useState(null)
  const [diff, setDiff] = useState(0)
  const [nowInterval, setNowInterval] = useState(null)

  useEffect(() => {
    setNowInterval(
      setInterval(() => {
        setDiff(new Date('2022-09-04') - new Date())
      }, 1000)
    )
    return () => clearInterval(nowInterval)
  }, [])

  function getCoundown(type) {
    switch (type) {
      case 'days':
        return Math.floor(diff / (1000 * 60 * 60 * 24))
      case 'hours':
        return Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      case 'minutes':
        return Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      case 'seconds':
        return Math.floor((diff % (1000 * 60)) / 1000)
      default:
        return 0
    }
  }

  return (
    <div className="font-orbitron bg-themeprimary text-white tracking-wider rounded p-4 mt-4 flex justify-between gap-2 items-center text-2xl">
      {/* {diff} */}
      <Item>{getCoundown('days')}</Item>
      <Divider />
      <Item>{getCoundown('hours')}</Item>
      <Divider />
      <Item>{getCoundown('minutes')}</Item>
      <Divider />
      <Item>{getCoundown('seconds')}</Item>
    </div>
  )
}

export default Counter
