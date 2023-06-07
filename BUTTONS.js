import React, { useState } from 'react'
export default function BUTTONS() {

  const createdigits = ()=>{
    const digits =[];
    
     for (let i=1; i< 10; i++){
      digits.push(<button className='keyboard' key={i}>{i}</button>)
     }
     return digits
 
  }
  let string = ""
  const [result,setresult]= useState('0')
  return (
     <> 
 


    
    </>
  )
}
