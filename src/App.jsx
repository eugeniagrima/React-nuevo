import Cart from './components/Cart';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import CartProvider from './context/CartContext';

function App() {
  return (
    <>
    <BrowserRouter> 
    <CartProvider>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer texto= "Greeting" />}/>
      <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
    </Routes>
    </CartProvider> 
    </BrowserRouter>
     </>
  );
}

export default App;
