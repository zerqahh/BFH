
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./loginPage.js";
import Success from "./successLogin.js";
import UserProfile from "./UserProfile.js"; // Importuj UserProfile



function App() {



  return (

    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/bf3/*" element={<Success />} ></Route>
        <Route path="/profile/:userId" element={<UserProfile />} />
        <Route path="/404" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}
export default App;
