import React from 'react';

const ServiceQuality=(props)=>{
    return( <label>
        How was your service?
                    <select onChange={props.serviceChange}>
                        <option disabled selected value="0">-- Choose an option--</option>
                        <option value="0.03">Amazing</option>
                        <option value="0.02">Good</option>
                        <option value="0.015">Fair</option>
                        <option value="0.01">Bad</option>
                    </select>
        </label>)
}

export default ServiceQuality;