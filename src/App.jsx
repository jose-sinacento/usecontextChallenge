import './App.css'; // Archivo de estilos CSS
import { ThemeProvider } from './themes/ThemeContext';
import RoutesApp from './routes/RoutesApp';
import Button from './components/Button';

const App = () => {
  return (
    <ThemeProvider>
        <RoutesApp />
        <h2>Change theme here</h2>
        <Button />
    </ThemeProvider>
  );
};

export default App;