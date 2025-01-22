import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage.jsx';

import SingleProductPage from './pages/SingleProductPage.jsx';


import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx';
import CartPage from './pages/CartPage.jsx';

import UpdateForm from './pages/UpdateForm';
import ProductEntryPage from './pages/ProductEntryPage';

import Navbar from './components/navbar/Navbar.jsx';



function App() {
  return (
    <>
      {/* <LoginPage /> */}
      {/* <SignupForm /> */}
      <h1>Follow-along application</h1>
      <Navbar/>
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path='/product-entry-page' element={<ProductEntryPage />} />
        
        <Route path='/update-products/:id' element={<UpdateForm />} />
        <Route path="/product-details/:id" element={<SingleProductPage/>}/>
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </>
  )
}

export default App;