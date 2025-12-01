import { useContext, createContext, useState } from 'react';

// Create context outside the component
const ThemeContext = createContext(null);

export default function ContextDemo() {
  const [theme, setTheme] = useState('light');

  return (
    // Provider wraps the children
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <h3>2. Context Hook (useContext)</h3>
      <p>The provider wraps the child component.</p>
      <ChildComponent />
    </ThemeContext.Provider>
  );
}

// Child component consuming the context
function ChildComponent() {
  const { theme, setTheme } = useContext(ThemeContext); // Consuming data

  const style = {
    background: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '10px',
    border: '1px solid #ccc',
    marginTop: '10px',
  };

  return (
    <div style={style}>
      <p>
        I am the child component. Current theme: <strong>{theme}</strong>
      </p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}
