import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing'
import About from './components/About'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'




function App() {


  return (
    <div id="home">
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
