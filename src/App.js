import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePage';
import History from './component/History';
import WordDetail from './component/WordDetail';
function App() {
  return (
    <div className="App">
        <nav>
            <div className='logo'>Dictonary App</div>
              <div className='render'>
                <Link to='/'>Home</Link>
                <Link to='/history'>History</Link>
              </div>
            </nav> 
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/History' element={<History></History>}></Route>
      <Route path='/WordDetail' element={<WordDetail></WordDetail>}></Route>
    </Routes>
    </div>
  );
}

export default App;
