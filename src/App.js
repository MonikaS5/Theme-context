import './App.css';
import { ThemeProvider } from './ThemeContext';
import ThemeButton from './ThemeButton'

function App() {
  return (
    <div className="App" >
      <ThemeProvider>
        <h2 style={{padding:'20px'}}>Toggle Button</h2>
        <ThemeButton/>
      </ThemeProvider>
    </div>
  );
}

export default App;
