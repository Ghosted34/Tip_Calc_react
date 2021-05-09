import React from 'react';

const BillInput =(props)=>{
    return( <label>
        Bill total:
        <input value = {props.billValue} onChange={props.billChange}/>
      </label>)
}

export default BillInput