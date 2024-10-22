import {useState} from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  const addvalue = () => {
    console.log("clicked" , counter)
    //counter = counter + 1
    if(counter < 20 ){
    setCounter(counter+1)
  }
  }

  const decreasevalue = () => {
    console.log( counter)
   // counter = counter - 1
    if(counter > 0){
    setCounter(counter-1)
  }

  }
  

  return (
    <>
    <h1>Code with ANkit</h1>
    <h2>Counter Value : {counter}</h2>

    <button onClick={addvalue}>Increase Value : {counter}</button>
    <button onClick={decreasevalue}>Decrease value : {counter}</button>
      
    </>
  )
}

export default App
