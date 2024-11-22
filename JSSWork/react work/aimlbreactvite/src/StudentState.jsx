import React, { useState } from 'react'

function StudentState(){

    const[count,setCount]=useState(50);
    // function doIncrement(){
    //     setCount(count+30);
    function doDecrement(){
        setCount(count-20);
    }
    return(
        <div> StudentState 
        <h2>Counter: {count}</h2>
        {/* <button id='btn' onClick={doIncrement}> Increment</button> */}
        <button id='btn' onClick={doDecrement}> Decrement</button>
        </div>
    )
}
export default StudentState