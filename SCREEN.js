import React from 'react'
import BUTTONS from './Components/BUTTONS'
export default function SCREEN() {
    let result = "0"
  return (
    <div className="keypad">
    <input type="text"className='screen' onLoad={result}></input>
    <BUTTONS/>
 
 </div>
  )
}
