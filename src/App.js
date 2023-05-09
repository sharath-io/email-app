import {Routes,Route,NavLink} from 'react-router-dom';
import {LandingPage,Inbox,Sent} from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <nav>
        <NavLink to="/">Landing Page ||</NavLink>
        <NavLink to="/inbox">Inbox ||</NavLink>
        <NavLink to="/sent">Sent ||</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/inbox' element={<Inbox/>}/>
        <Route path='/sent' element={<Sent/>}/>
      </Routes>
    </div>
  );
}

export default App;
