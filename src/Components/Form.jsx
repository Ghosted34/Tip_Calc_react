import React from 'react';
import PartySize from './FormLabels/PartySize';
import ServiceQuality from './FormLabels/ServiceQuality';
import BillInput from './FormLabels/BillInput'
import './Form.css'

const Form = (props) =>{
    return(
        <form className="container">
            <h1>Gratuity Calculator</h1>
            <BillInput billValue = {props.billValue} billChange = {props.billChange}/>
            <PartySize partySize = {props.partySize} sizeChange={props.sizeChange}/>
            <ServiceQuality serviceChange = {props.serviceChange}/>
            <button type="submit" onClick={props.clicked}>Calculate</button>

        </form>
    )
}

export default Form;