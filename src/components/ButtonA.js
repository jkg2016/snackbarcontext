import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { DisplayAlertContext } from '../contexts/DisplayAlertContext';

const styles = {
  button: {
    margin: 8,
  },
};

function ButtonA() {

  const { displayMessage } = useContext(DisplayAlertContext)

return (
  <Button
    style={styles.button}
    variant="outlined"
    color="secondary"
    onClick={() => displayMessage('You clicked Button A!', "success")}
  >
    Button A
  </Button>
  )
}


export default ButtonA;