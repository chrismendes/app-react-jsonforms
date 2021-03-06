/** @jsx jsx */
import React from 'react';
import TextField from '../../../clientforms/components/TextField';
import DateTime from '../../../clientforms/components/DateTime';
import Checkbox from '../../../clientforms/components/Checkbox';
import Number from '../../../clientforms/components/Number';
import { css, jsx } from '@emotion/core';

const FieldFactory = (props) => {

  const type = props.type;
  if(!type) {
    return false;
  }

  /**
   * Factory function returning component based on specified type
   * 
   * @param {string} type e.g. "text", "integer", "datatime", etc.
   */
  const getComponent = (type) => {
    switch(type) {
      case 'text':
        return <TextField {...props} />
      case 'integer':
        return <Number {...props} />
      case 'datetime':
        return <DateTime {...props} />
      case 'bool':
        return <Checkbox {...props} />
      default:
        return (
          <p css={css`color: #888; font-style: italic;`}>
            Field not implemented for type: {type}
          </p>
        );
    }
  };
  
  return getComponent(type);
  
};

export default FieldFactory;