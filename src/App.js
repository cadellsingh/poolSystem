import { GlobalStyles } from './styles/globalStyling';
import { MainContent } from './components/MainContent';
import { Admin } from './components/Admin/Admin';
import { GlobalProvider } from './context/GlobalState';

const App = () => {
  const credentials = 'user';

  return (
    <>
      <GlobalStyles />
      <GlobalProvider>
        {credentials === 'admin' ? <Admin /> : <MainContent />}
      </GlobalProvider>
    </>
  );
};

export default App;
