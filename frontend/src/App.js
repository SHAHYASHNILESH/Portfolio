import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return <Router>
    <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/projects" element={<Projects/>}/>
   </Routes>
   <Footer/>
    </Router>
  
}

export default App;
