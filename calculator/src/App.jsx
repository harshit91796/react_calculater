
import React, { useState } from 'react'
import { ImPlus,ImMinus } from 'react-icons/im'
import { ImCross } from 'react-icons/im'
import { FaDivide } from 'react-icons/fa'

function App() {
   
  const [number1,setnumber1] = useState(0)
  const [number2,setnumber2] = useState(0)
  const [result,setresult] = useState(0)

  function handleNumber1Change(e){
       setnumber1(e.target.value)
  }

  function handleNumber2Change(e){
    setnumber2(e.target.value)
  }

 function multiplication(){
     const  multiplication = parseFloat(number1)*parseFloat(number2)
            setresult(multiplication)
 }
 function addition(){
  const  addition = parseFloat(number1)+parseFloat(number2)
  setresult(addition)
 }
 function substraction(){
  const  substraction = parseFloat(number1)-parseFloat(number2)
  setresult(substraction)
 }
 function division(){
  const  division = parseFloat(number1)/parseFloat(number2)
            setresult(division)
 }
function handleClear(){
    setresult(0)
    setnumber1(0)
    setnumber2(0)
}

  console.log(number1)
  console.log(number2)

  return (
    <div className='container'>
      <div className="inBox">
      <div className="outResult">
         <div className="result" >{result}</div>
      </div>
      <div className="inpu">
      <input type="number" value={number1} onChange={ 
          handleNumber1Change
      } />  <input type="number" value={number2} onChange={ 
        handleNumber2Change
    }/> 
      </div>

      <div className="buttonVer">
      <button onClick={addition} className='btn' >
      <ImPlus className="icons "/>
      </button>
      <div className="buttonHor">
      <button onClick={multiplication} className='btn'>
      <ImCross className='icons'/>
      </button>
      <button onClick={handleClear} className='btn  clear'>
          clear
      </button>
      <button onClick={division} className='btn'>
      <FaDivide className='icons'/>
      </button>
      </div>
      <button onClick={substraction} className='btn'>
      <ImMinus className='icons'/>
      </button>
  
 </div>
      
      </div>
     
      
    </div>
  )
}

export default App
