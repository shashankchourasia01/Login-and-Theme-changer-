import { useState, useEffect } from 'react';
import LoginForm from './Components/Assests/LoginForm/LoginForm';
import { ThemeProvider } from './contexts/theme';
import ThemeBtn from './Components/ThemeBtn';

function App() {

  const [themeMode , setThemeMode] = useState("light")

  const lightTheme = () =>{
    setThemeMode("light")
  }

  const darkTheme = () =>{
    setThemeMode("dark")
  }

   // Actual change in theme

   useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
   }, [themeMode])

  return (
    <div>
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>

      <ThemeBtn />

     <LoginForm />
     
     </ThemeProvider>
    </div>
  );
}

export default App;
