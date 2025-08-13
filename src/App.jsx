import { Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin.jsx";
import Home from "./components/Home.jsx";
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import GroupDetail from "./components/GroupDetail.jsx";


const App = () => {
  return (
  
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/groups/:groupId" element={<GroupDetail />} />
      </Routes>
  
  );
};


export default App;
