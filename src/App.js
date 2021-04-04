import { useContext } from 'react';
import { GlobalStyles } from './styles/globalStyling';
import { MainContent } from './components/MainContent';
import { Admin } from './components/Admin/Admin';
import { GlobalProvider } from './context/GlobalState';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <GlobalProvider>
        <MainContent />
      </GlobalProvider>
    </>
  );
};

export default App;
