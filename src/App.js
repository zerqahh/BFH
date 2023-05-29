
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./loginPage.js";
import Success from "./successLogin.js";

// function App() {
//   return (
//     <>
//       <Header />
//       <Bflag />
//       <Footer />
//     </>
//   );
// }


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/success" element={<Success />} ></Route>
      </Routes>
    </Router>
  )
}
export default App;
