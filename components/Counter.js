import React, { useState, useEffect } from 'react'

function Item(props) {
  return <div className="w-10 text-sm font-bold">{props.children}</div>
}

function Divider(props) {
  return <div className="text-sm">:</div>
}

function Counter() {
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
    let count = 0
    switch (type) {
      case 'days':
        count = Math.floor(diff / (1000 * 60 * 60 * 24))
        break
      case 'hours':
        count = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        break
      case 'minutes':
        count = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        break
      case 'seconds':
        count = Math.floor((diff % (1000 * 60)) / 1000)
        break
    }
    let countString = count.toString()
    if (count.toString().length == 1) return `0${countString}`
    return countString
  }

  return (
    <div className="font-orbitron font-bold text-themeprimary tracking-wider rounded p-4 flex justify-between gap-2 items-center text-2xl">
      {/* {diff} */}
      {diff > 0 ? (
        <React.Fragment>
          <Item>{getCoundown('days')}</Item>
          <Item>{getCoundown('hours')}</Item>
          <Item>{getCoundown('minutes')}</Item>
          <Item>{getCoundown('seconds')}</Item>
        </React.Fragment>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </div>
  )
}

export default Counter
