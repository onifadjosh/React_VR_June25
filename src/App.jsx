import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import Profile from "./pages/Profile";
import Effect from "./pages/Effect";
import Layout from "./pages/Layout";
import Fetch from "./pages/Fetch";
import Formikk from "./pages/Formik";
import Login from "./pages/Login";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contactooo" element={<Navigate to={"/contact"} />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Route>
        {/* <Route path="/product/:id" element={<Profile/>}/> */}
        <Route path="/effect" element={<Effect />} />
        <Route path="/fetch" element={<Fetch/>} />
        <Route path="/formik" element={<Formikk/>} />
        <Route path="/login" element={<Login/>} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
