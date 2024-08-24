import { ThemeProvider } from '../../contexts/ThemeContext';
import GlobalStyles from '../../assets/styles/global';

import ToastContainer from '../Toast/ToastContainer';

import Header from '../Header';
import Content from '../Content';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <ToastContainer />

      <Header />
      <Content />
    </ThemeProvider>
  );
}

export default App;
