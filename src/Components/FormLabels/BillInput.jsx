import React from 'react';

const BillInput =(props)=>{
    return( <label>
        Bill total:
        <input value = {props.billValue} onChange={props.billChange} type="number" step="0.01" title="Eg. 300.75"/>
      </label>)
}

export default BillInput