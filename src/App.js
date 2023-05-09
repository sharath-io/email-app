import {Routes,Route} from 'react-router-dom';
import {Inbox,Sent,EmailDetails} from './pages/index';
import {Header} from './components/Header'; 
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path='/inbox' element={<Inbox/>}/>
        <Route path='/sent' element={<Sent/>}/>
        <Route path='/emailDetails/:mailDetailId' element={<EmailDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
