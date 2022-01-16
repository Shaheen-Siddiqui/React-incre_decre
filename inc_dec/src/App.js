import React, { useState } from 'react';

const App=()=>{

  let [incre,setIncre]=useState(0);

const increment=()=>{
 setIncre(incre +1)
//  setDecre(decre -1)
}
const decrement=()=>{
    setIncre(incre -1)
    if(incre>0){
      setIncre(incre-1)
    }else{
      setIncre(0)
      alert("will not decreace after zoro")
    }
}
  return(
  
  <>
  <div className="outer_div">

      <button onClick={increment}>Increment (+)</button>
  <h1 className="heading">{incre}</h1>
  <button onClick={decrement}>Decrement (-)</button>
    
  </div>
  </>)
  }
  export default App;
  