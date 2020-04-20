import React from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import MuiAlert from '@material-ui/lab/Alert';
import { SharedSnackbarConsumer } from '../contexts/SharedSnackbarContext';

function Alert(props) {
    return <MuiAlert variant="filled" {...props} />;
  }

const SharedSnackbar = () => (
  <SharedSnackbarConsumer>
    {({ snackbarIsOpen, message, closeSnackbar, severity, }) => (
        <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={snackbarIsOpen}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        message={message}
        severity={severity}
        action={[
          <IconButton key="close" color="inherit" onClick={closeSnackbar}>
             <Close />
          </IconButton>,
        ]}
      >
          <Alert onClose={closeSnackbar} severity={severity}>

            {message}

        </Alert>
      </Snackbar>
    )}
  </SharedSnackbarConsumer>
);

export default SharedSnackbar;