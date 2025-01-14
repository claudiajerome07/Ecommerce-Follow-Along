

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage.jsx';

import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx';
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

        <Route path='/homepage' element={<HomePage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path='/product-entry-page' element={<ProductEntryPage />} />

        <Route path='/update-products/:id' element={<UpdateForm />} />
      </Routes>
    </>
  )
}

export default App;