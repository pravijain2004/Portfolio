import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Skills/Skills.jsx"
import { Profile } from "./components/Profile/profile";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
     <Navbar />
     <Profile />
     <About />
     <Skills />
     <Projects />
     <Contact />
    </div>
  );
}

export default App;
