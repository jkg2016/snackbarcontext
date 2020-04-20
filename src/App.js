import React from 'react';
import ButtonA from '../src/components/ButtonA';
import ButtonB from '../src/components/ButtonB';
import { SharedSnackbarProvider } from '../src/contexts/SharedSnackbarContext';
import DisplayAlertProvider from '../src/contexts/DisplayAlertContext';

const styles = {
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
};

function App() {
  return (
    <div style={styles.app}>
        <SharedSnackbarProvider>
          <DisplayAlertProvider>
            <ButtonA />
            <ButtonB />
          </DisplayAlertProvider>
        </SharedSnackbarProvider>
      </div>
  );
}

export default App;
