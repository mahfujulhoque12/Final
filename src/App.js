import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

//import styled from 'styled-components';
import {Home,Products,SingelProducts,About,Cart,Error,Checkout,AuthWrapper} from './pages'
import PrivateRoute from './pages/PrivateRoute';

function App() {
  return (
    <AuthWrapper>
      <Router>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Routes>
        <Route  path='/' element={<Home></Home>}> </Route>
        <Route  path='/about' element={<About></About>}> </Route>
        <Route  path='/cart' element={ <Cart></Cart>}></Route>
        <Route  path='/products' element={<Products></Products>}></Route>
        <Route  path='/products/:id' element={<SingelProducts></SingelProducts>}></Route>
        <Route path='/checkout' element={
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        }></Route>
        <Route  path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
    </AuthWrapper>
  )
}


export default App
