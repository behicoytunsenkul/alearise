import React, { useState } from 'react';
import Login from './components/Login';
import BetForm from './components/BetForm';
import CustomNavbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBet, getBetResult } from './contracts/contracts.move';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [showBetForm, setShowBetForm] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setShowBetForm(false);
  };

  const handleShowBetForm = () => {
    setShowBetForm(true);
  };

  const handleBet = ({ amount, selectedCrypto, prediction, date }) => {
    // createBet(user, asset, Number(amount), prediction, new Date(date).getTime());
    // const result = getBetResult(user, new Date(date).getTime());
    // console.log('Bahis Sonucu:', result ? 'Kazandınız!' : 'Kaybettiniz.');
    alert('Bahis yapıldı!');
    setShowBetForm(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <CustomNavbar onLogout={handleLogout} onShowBetForm={handleShowBetForm} />
      ) : null}
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          {showBetForm ? (
            <BetForm onBet={handleBet} />
          ) : null}
        </>
      )}
    </div>
  );
};

export default App;
