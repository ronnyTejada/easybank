import React from 'react'
import './style.css'

const Input = ({textarea, onChange, name, value}) => {
    return ( 
        <>
            {!textarea ?
            <input type="text" name={name} value={value} onChange={onChange} className='input'/>
            :
            <textarea name={name} onChange={onChange} value={value} className='input' id="" cols="30" rows="10"></textarea>
        }
        </>
        
     );
}
 
export default Input;