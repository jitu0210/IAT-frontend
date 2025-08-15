import { Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin.jsx";
import Home from "./components/Home.jsx";
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import GroupDetail from "./components/GroupDetail.jsx";
import ForgetPassword from "./pages/Forgetpassword.jsx"
import Help from "./pages/Help.jsx"
import Developer from "./pages/Developer.jsx";


const App = () => {
  return (
  
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/help" element={<Help />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/groups/:groupId" element={<GroupDetail />} />
      </Routes>
  
  );
};


export default App;
