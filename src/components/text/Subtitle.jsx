import React from 'react';
import './style.css'
const Subtitle = ({text,size}) => {
    return ( 
        <p className={`subtitle ${size!==undefined ? `subtitle--size-${size}`:''}`}>{text}</p>
     );
}
 
export default Subtitle;