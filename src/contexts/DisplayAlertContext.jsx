import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Snackbar } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import MuiAlert from '@material-ui/lab/Alert';

export const DisplayAlertContext = React.createContext();

const DisplayAlertProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [message, setMessage] = React.useState({});
  const [severity, setSeverity] = React.useState('');

  // const { children } = props;


  const displayMessage = (dispMessage, msgSeverity) => {
    setMessage(dispMessage);
    setSeverity(msgSeverity);
    setIsOpen(true);
  };

  const closeSnackbar = () => {
    setMessage('');
    setSeverity('');
    setIsOpen(false);
  };

  const DisplayAlertMsg = () => (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={isOpen}
      onClose={closeSnackbar}
      action={[
        <IconButton key="close" color="inherit" onClick={closeSnackbar}>
          <Close />
        </IconButton>,
      ]}
    >
      <MuiAlert
        onClose={closeSnackbar}
        variant="filled"
        severity={severity}
      >
        {message}
      </MuiAlert>

    </Snackbar>
  );
  return (
    <DisplayAlertContext.Provider
      value={{
        displayMessage,
        closeSnackbar,
        snackbarIsOpen: isOpen,
        message,
        severity,
      }}
    >
      <DisplayAlertMsg />
      {children}

    </DisplayAlertContext.Provider>
  );
};

export default DisplayAlertProvider;

DisplayAlertProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const DisplayAlertConsumer = DisplayAlertContext.Consumer;
