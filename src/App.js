
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./loginPage.js";
import Success from "./successLogin.js";




function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/bf3" element={<Success />} ></Route>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}
export default App;
