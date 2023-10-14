import './App.css';
import Navbar from './components/Navbar/navbar';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import Project from './components/projects/project';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Intro />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>  
  );
}

export default App;
