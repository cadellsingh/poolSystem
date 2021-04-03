export const initialClassState = {
  name: '',
  price: '',
  description: '',
  instructor: '',
  time: '',
  day: '',
};

export const classReducer = (state, action) => {
  const { type, value } = action;

  return {
    ...state,
    [type]: value,
  };
};
