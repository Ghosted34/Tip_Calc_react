import {useState} from 'react';
import swal from 'sweetalert';
import Form from './Components/Form'
import './App.css';

function App() {

  const[totalState, setTotalState] = useState("");
  const[serviceState, setServiceState] = useState(0)
  const[partySize, setPartySize] = useState("")
  const[totalTip, setTotalTip] = useState(0)
  const[tipPerson, setTipPerson] = useState(0)

  const setBillTerm = (event) =>{
      setTotalState(event.target.value)
  }
  
  const setServiceTerm = (event) =>{
    setServiceState(event.target.value)
  }

  const setPartyTerm =(event)=>{
    setPartySize(event.target.value)
  }

  
  const calculateTip = (event) =>{
    event.preventDefault();
    if(totalState === ""||serviceState === 0){
      swal("Warning!", "Bill/Service Quality not inputted", "warning");
        return;
    }
    
    if(partySize < 1 || partySize === null){
      swal("Warning!", "Party size not set", "warning");
      return;
    }
    let tipTotal = parseFloat(totalState * serviceState).toFixed(2)
    let tipHuman = parseFloat(tipTotal/partySize).toFixed(2)
    setTotalTip(tipTotal)
    setTipPerson(tipHuman)
    swal("Done!", `Total tip is: ${totalTip} ; Tip per person: ${tipPerson} `, "success")
    
  }


  return (
    <div className="App">
      <div className="background">
        <br/>
        <Form billValue = {totalState} 
        billChange = {setBillTerm}
        partySize = {partySize}
        sizeChange={setPartyTerm}
        serviceChange = {setServiceTerm}
        clicked = {calculateTip}
        />
    </div>
    </div>
  );
}

export default App;
