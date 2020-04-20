import React from 'react';
import { Button } from '@material-ui/core';
import { SharedSnackbarConsumer } from '../contexts/SharedSnackbarContext';

const styles = {
  button: {
    margin: 8,
  },
};

const ButtonB = () => (
  <SharedSnackbarConsumer>
    {({ openSnackbar }) => (
      <Button
        style={styles.button}
        variant="outlined"
        color="secondary"
        onClick={() => openSnackbar('You clicked Button B!', "error")}
      >
        Button B
      </Button>
    )}
  </SharedSnackbarConsumer>
);

export default ButtonB;