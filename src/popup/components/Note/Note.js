import React, { useState } from 'react';
import './Note.css';
import PropTypes from 'prop-types';
import closeIcon from "./close.svg";


function Note({content,isUrgent,onRemove}) {
  const [isHidden,setHidden] = useState(true)

  const botonDeCerrar = (
    <button>
      <img src={closeIcon} />
    </button>
  );
  
  if (isUrgent){
    return (
      <div 
        className="Note-urgent" 
        onMouseEnter={()=>setHidden(false)}
        onMouseLeave={()=>setHidden(true)}
      >
          <p>{content}</p>
          {!isHidden && botonDeCerrar}
      </div>
    );
  }else{
    return (
      <div 
        className="Note" 
        onMouseEnter={()=>setHidden(false)}
        onMouseLeave={()=>setHidden(true)}
      >
          <p>{content}</p>
          {!isHidden && botonDeCerrar}
      </div>
    );
  }
}

Note.propTypes = {
  content: PropTypes.string.isRequired,
  isUrgent: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Note;