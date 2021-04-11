import { createContext, useReducer, useState, useEffect } from 'react';
import { classReducer, initialClassState } from './createClassReducer';
import firebase, { auth } from '../firebase/config';
import { GetClasses } from '../firebase/apis';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [classState, dispatch] = useReducer(classReducer, initialClassState);
  const [currentAdmin, setCurrentAdmin] = useState();
  const [loading, setLoading] = useState(true);
  const classes = GetClasses();

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((admin) => {
      setCurrentAdmin(admin);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleFormChange = (e) => {
    dispatch({
      type: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        classState: classState,
        handleFormChange: handleFormChange,
        classes: classes,
        currentAdmin: currentAdmin,
        login: login,
        logout: logout,
      }}
    >
      {!loading && children}
    </GlobalContext.Provider>
  );
};
