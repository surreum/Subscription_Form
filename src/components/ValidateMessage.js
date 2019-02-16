import React from 'react';

export const ValidateMessage = ({wrongInput}) =>
  <div className='wrongInput'>
    {Object.keys(wrongInput).map((fieldName, i) => {
      if(wrongInput[fieldName].length > 0){
        return (
          <p key={i}> Your {fieldName}{wrongInput[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>