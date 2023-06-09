
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./loginPage.js";
import Success from "./successLogin.js";
import { StoreProvider } from 'easy-peasy';
import store from './store';
import FriendProfile from './FriendProfile.js';
function App() {



  return (
    <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/bf3/*" element={<Success />} ></Route>
          <Route path="/404" element={<Navigate to="/" />} />
          <Route path="/friends/:friendId" element={<FriendProfile />} /> Dodaj tę trasę
        </Routes>
      </Router>
    </StoreProvider>
  )
}
export default App;
