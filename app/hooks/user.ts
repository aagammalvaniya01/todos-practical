"use client"; 

import { useState, useEffect } from 'react';
import { readLocalStorage } from '../services/local-storage';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLogged = readLocalStorage('isLoggedIn');
    if (userLogged) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return isLoggedIn;
};

export default useAuth;
