import React from 'react';
import TextField from '../../../clientapps/components/TextField';
import DateTime from '../../../clientapps/components/DateTime';
import Checkbox from '../../../clientapps/components/Checkbox';

const FieldFactory = (props) => {

  const type = props.type;
  const label = props.label;
  if(!type) {
    return false;
  }

  const getComponent = (type) => {
    switch(type) {
      case 'text':
        return <TextField {...props} />
      case 'datetime':
        return <DateTime {...props} />
      case 'bool':
        return <Checkbox {...props} />
      default:
        return <p>Field not implemented for type: {type}</p>
    }
  };
  
  return getComponent(type);
  
};

export default FieldFactory;