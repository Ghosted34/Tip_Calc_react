import React from 'react';

const PartySize =(props)=>{
    return <label>
        Party size:
        <input value={props.partySize} onChange={props.sizeChange}/>
    </label>
}

export default PartySize