/* eslint no-eval: 0 */
import './App.css';
import { useState } from 'react';
export default function App() {
const [result,setresult] = useState("")
const handleonclick = (e)=>{
setresult(result.concat(e.target.innerText))
}
const calculate = ()=>{
try{
  setresult(eval(result).toString())
 } catch(err){
  setresult("Error")
 }


}

const clear = ()=>{
setresult("")
}

const backspace = ()=>{
setresult(result.slice(0,-1))
}


  
 
  return (
    <>
  <nav className="navbar navbar-expand bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">Calculator |</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/home">Home |</a>
      </div>
    </div>
  </div>
</nav>
<div className='mainbody' style={{"border": "5px solid",  "height": "30rem", "width": "20.5rem","display": "flex", "margin": "auto","marginTop": "2rem"}}>
<div className="keypad">
    <input type="text"className='screen' value={result} ></input>
    <button className='keyboard expression'  style={{"color": "red"}} onClick={clear}>AC</button>
<button className='keyboard expression' style={{"color": "red"}} onClick={backspace}>Bs</button>
<button className='keyboard expression' onClick={handleonclick}>%</button>
<button className='keyboard expression' onClick={handleonclick}>/</button>
<button className='keyboard ' onClick={handleonclick}>7</button>
<button className='keyboard ' onClick={handleonclick}>8</button>
<button className='keyboard ' onClick={handleonclick}>9</button>
<button className='keyboard expression' onClick={handleonclick}>*</button>
<button className='keyboard ' onClick={handleonclick}>4</button>
<button className='keyboard ' onClick={handleonclick}>5</button>
<button className='keyboard ' onClick={handleonclick}>6</button>
<button className='keyboard expression' onClick={handleonclick}>-</button>
<button className='keyboard ' onClick={handleonclick}>1</button>
<button className='keyboard ' onClick={handleonclick}>2</button>
<button className='keyboard ' onClick={handleonclick}>3</button>
<button className='keyboard expression' onClick={handleonclick}>+</button>
<button className='keyboard ' onClick={handleonclick}>00</button>
<button className='keyboard ' onClick={handleonclick}>0</button>
<button className='keyboard ' onClick={handleonclick}>.</button>
<button className='keyboard expression' onClick={calculate}>=</button>


</div>

</div>
  



    </>
  )}
  




