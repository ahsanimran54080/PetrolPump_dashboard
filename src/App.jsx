import { Route, Routes } from 'react-router-dom';
import './App.css';
import LeftSidebar from './Components/LeftSidebar';
import Home from './Home/Home';

function App() {
  return (
    <div className="App position-relative">
      <div className='backgroun-header'>

      </div>
      <div className="leftsidebar">
        <LeftSidebar />
      </div>
      <div className="rightcontent">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
