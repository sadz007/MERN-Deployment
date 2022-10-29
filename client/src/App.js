import Main from './views/Main';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleProduct from './components/SingleProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Routes>
            <Route element = {<Main/>} path = '/'/>
            <Route element = {<SingleProduct/>} path = '/product/:id' />
            <Route element = {<UpdateProduct/>} path = '/product/edit/:id' />
          </Routes>
          
        </header>
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
