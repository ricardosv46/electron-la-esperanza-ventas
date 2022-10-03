import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import AppBar from './components/AppBar';
import { BrowserRouter } from 'react-router-dom';
import client from './apollo';
import { ApolloProvider } from '@apollo/client';

import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from '@store/auth/AuthState';
import RootRouter from '@routes/RootRouter';

function App() {
  console.log(window.ipcRenderer);

  const [isOpen, setOpen] = useState(false);
  const [isSent, setSent] = useState(false);
  const [fromMain, setFromMain] = useState<string | null>(null);

  const handleToggle = () => {
    if (isOpen) {
      setOpen(false);
      setSent(false);
    } else {
      setOpen(true);
      setFromMain(null);
    }
  };
  const sendMessageToElectron = () => {
    if (window.Main) {
      window.Main.sendMessage("Hello I'm from React World");
    } else {
      setFromMain('You are in a Browser, so no Electron functions are available');
    }
    setSent(true);
  };

  useEffect(() => {
    if (isSent && window.Main)
      window.Main.on('message', (message: string) => {
        setFromMain(message);
      });
  }, [fromMain, isSent]);

  return (
    <div className="flex flex-col h-screen ">
      {window.Main && (
        <div className="flex-none ">
          <ApolloProvider client={client}>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />

            <AuthProvider>
              <BrowserRouter>
                <RootRouter />
              </BrowserRouter>
            </AuthProvider>
          </ApolloProvider>
        </div>
      )}
    </div>
  );
}

export default App;
