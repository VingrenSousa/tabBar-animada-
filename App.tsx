
import { ThemeProvider } from 'styled-components';
import Layout from './src/routes/_layout';
import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
       <Layout/>
    </ThemeProvider>
   
  );
}


