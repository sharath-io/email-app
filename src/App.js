import {Routes,Route} from 'react-router-dom';
import {Inbox,Sent} from './pages/index';
import {Header} from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path='/inbox' element={<Inbox/>}/>
        <Route path='/sent' element={<Sent/>}/>
      </Routes>
    </div>
  );
}

export default App;
