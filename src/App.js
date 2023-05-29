import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  return (
    <div className={`app ${theme}`}>
<button onClick={toggleTheme} className="button"> Change theme </button>
  </div>
  ) 
}

export default App;
