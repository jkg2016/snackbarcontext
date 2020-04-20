import React from 'react';
import PropTypes from 'prop-types';
import SharedSnackbar from '../components/SharedSnackbar';

export const SharedSnackbarContext = React.createContext();

export const SharedSnackbarProvider = ({children}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [message, setMessage] = React.useState({});
    const [severity, setSeverity] = React.useState('');

    //const { children } = props;

    const addLineBreaks = string =>
      string.split('\n').map((text, index) => (
        <React.Fragment key={`${text}-${index}`}>
          {text}
          <br />
        </React.Fragment>
      ));

    const openSnackbar = (dispmessage, severity) => {
        console.log('dispmessage:' + dispmessage)
        console.log('index:' + dispmessage.split('\n').length);
        const str = addLineBreaks(dispmessage)
        console.log('str:' + str);
        setMessage(addLineBreaks(dispmessage));
        console.log(message);
        setSeverity(severity);
        setIsOpen(true);
    }

    const closeSnackbar = () => {
        setMessage('');
        setSeverity('');
        setIsOpen(false);
    }

    return (
        <SharedSnackbarContext.Provider
          value={{
            openSnackbar,
            closeSnackbar,
            snackbarIsOpen: isOpen,
            message: message,
            severity: severity,
          }}
        >
         <SharedSnackbar />
        
          {children}
        </SharedSnackbarContext.Provider>
      );
};

export const SharedSnackbarConsumer = SharedSnackbarContext.Consumer;

SharedSnackbarProvider.propTypes = {
    children: PropTypes.node.isRequired,
 };
  