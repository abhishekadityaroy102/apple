import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Store from './components/Store';
import Airpods from './components/Airpods';
import Watch from './components/Watch';
import Ipad from './components/Ipad';
import Mac from './components/Mac';
import Iphone from './components/Iphone';
import Storedata from './components/Storedata';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      
        <Route path="/store" element={
        <PrivateRoute><Store/></PrivateRoute>}></Route>
        <Route path="/store/*" element={<Store/>}>
          <Route path=":id" element={<Storedata/>}></Route>
        </Route>
        <Route path="/mac" element={
        <PrivateRoute><Mac/></PrivateRoute>}></Route>
        <Route path="/ipad" element={<PrivateRoute><Ipad/></PrivateRoute>}></Route>
        <Route path="/iphone" element={<PrivateRoute><Iphone/></PrivateRoute>}></Route>
        <Route path="/watch" element={<PrivateRoute><Watch/></PrivateRoute>}></Route>
        <Route path="/airpods" element={<PrivateRoute><Airpods/></PrivateRoute>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
