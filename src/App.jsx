import Cart from './components/Cart';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter> 
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer texto= "Greeting" />}/>
      <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
    </Routes>
    </BrowserRouter>
     </>
  );
}

export default App;
