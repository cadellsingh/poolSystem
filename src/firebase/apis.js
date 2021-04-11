import firebase from './config';
import { useState, useEffect } from 'react';

const classesRef = firebase.firestore().collection('classes');

export const GetClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const unsubscribe = classesRef.onSnapshot((snapshot) => {
      const classesData = snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });

      setClasses(classesData);
    });

    return () => unsubscribe();
  }, []);

  return classes;
};

export const UpdateClasses = () => {
  useEffect(() => {});
};

export const createClass = (state) => {
  return classesRef.add({
    name: state.name,
    description: state.description,
    price: state.price,
    instructor: state.instructor,
    time: state.time,
    day: state.day,
  });
};
