import React, { useState } from 'react';
import { Header } from './components/header';
import { Dashboard } from './components/dashboard';
import { NewTransactionModal } from './components/newTransactionModal';


function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }


  return (
    <>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <Dashboard />
    </>
  );
}

export default App;
