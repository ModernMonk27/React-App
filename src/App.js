
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';

const App = () => {

  return(

    
      <Router>
        <div className='app'>
          <h1>Modern Monk</h1>
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
      
    


  )
}

export default App;


