import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import Profile from "./pages/Profile";
import Effect from "./pages/Effect";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contactooo" element={<Navigate to={'/contact'}/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>
        {/* <Route path="/product/:id" element={<Profile/>}/> */}
        <Route path="/effect" element={<Effect/>}/>


        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </>
  );
}

export default App;
