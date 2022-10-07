import React, { useState } from 'react'

function Body() {
  const [showTemplate, setShowTemplate] = useState(true)
  const [hide, setHide] = useState("Hide Text")
  const changeState = (e) => {
    e.preventDefault()
    setShowTemplate(!showTemplate)
    hide === "Hide Text"? setHide("Show Text") : setHide("Hide Text")
  }


  return (
    <div className='body'>
        {showTemplate && <h1>Hello World!</h1>}
        <button id='changeState' type="submit" onClick={changeState}>{hide}</button>
    </div>
  )
}

export default Body