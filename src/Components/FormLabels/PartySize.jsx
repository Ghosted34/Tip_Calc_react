import React from 'react';

const PartySize =(props)=>{
    return <label>
        Party size:
        <input value={props.partySize} onChange={props.sizeChange} type="number" step="1" title="Nummbers only, Please"/>
    </label>
}

export default PartySize