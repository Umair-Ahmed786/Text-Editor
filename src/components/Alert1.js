import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Alert1 = ({ alert, setalert }) => {
 
    const cleartext = () => {
        setalert('');
    }

    if(alert){
        setTimeout(cleartext, 1000);
        return(
            <Alert key="success" variant="success">
            <b>Success!</b> {alert}
          </Alert>
        );
    }

    return null;

  
};

export default Alert1;
