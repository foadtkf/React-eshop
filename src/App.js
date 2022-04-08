import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';

// import Test from './Components/Shop/Test';

function App() {
  return (
    <div >
      <Header></Header>
      {/* <Shop></Shop> */}
      <Routes>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
