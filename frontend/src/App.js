import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Login from './components/Login';

function App() {
  return <Router>
    <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/account" element={<Login/>}/>
   </Routes>
   <Footer/>
    </Router>
  
}

export default App;
