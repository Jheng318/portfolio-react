import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App2.css";
import Main from "./components/Main";

function App() {
  const localIsDark = JSON.parse(window.localStorage?.getItem("isDark"));
  const [isDark, setIsDark] = useState(localIsDark ?? false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
  }, [isDark]);
  const handleDark = () => {
    setIsDark(!isDark);
    window.localStorage.setItem("isDark", !isDark);
  };
  return (
    <>
      <Header isDark={isDark} handleIsDark={handleDark} />
      <Main isDark={isDark} />
      <Footer />
    </>
  );
}

export default App;
