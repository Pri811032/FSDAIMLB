import React from 'react'
import Student from './Student';
import logo from './abeslogo.png'
function App() {
  // let a=20;
  // let mystyle={
  //   backgroundColor:'cyan',
  //   color:'red' ,
  //   border:'7px solid black' ,
  //   height:'100px' ,
  //   fontSize:'100px'
  // }
  const studentdata={
    college:"ABES ENGINEERING COLLEGE",
    pic:logo,
    name:"priyanshi",
    roll: 2200321530134,
    branch:"CSE-AIML",
    section:"B"

  }

  return (
    // <div style={{color:'red'}}>
    //   {/* <h2>Abes engineering college</h2>
    //   <div style={mystyle}>{a}</div>
    //   <div><Student>
    //     </Student></div> */}
    //   </div>
    <div>
    <Student data={studentdata}/>
      {/* <Student pic={<img src={logo} alt='pic' />} name="Priyanshi chakervorty" branch="CSE-AIML" college="ABES ENGINEERING COLLEGE" roll="220032130134" section="B"  /> */}
    </div>
  )
}

export default App