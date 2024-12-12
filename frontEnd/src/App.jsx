import LoginPage from "./components/Auth/Login";
import SignupForm from "./components/Auth/Signup";
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      {/* <LoginPage /> */}
      {/* <SignupForm /> */}
      <h1>Follow-along application</h1>
      <Routes>
        <Route path='/' />
        <Route path="/Signup" element={<SignupForm/>} />
        <Route path="/Login" element={<LoginPage/>} />
      </Routes>
    </>
  )
}

export default App;