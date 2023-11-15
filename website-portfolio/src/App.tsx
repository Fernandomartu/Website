import { useState, useEffect } from "react";
import Navbar from "./scenes/Navbar";
import { SelectedPage } from "@/shared/types";
import Home from "./scenes/Home";
import Resume from "./scenes/Resume";
import Contact from "./scenes/Contact";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedPage(SelectedPage.Home);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

      <Home setSelectedPage={setSelectedPage} />
      <Resume setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
