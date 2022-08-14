import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return <Router>
    <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
   </Routes>
   <Footer/>
    </Router>
  
}

export default App;
