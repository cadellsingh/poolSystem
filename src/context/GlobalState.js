import { createContext, useReducer, useState, useEffect } from 'react';
import { classReducer, initialClassState } from './createClassReducer';
import firebase from '../firebase/config';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [classState, dispatch] = useReducer(classReducer, initialClassState);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('classes').get();
      const classes = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setClasses(classes);
    };

    fetchData();
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
