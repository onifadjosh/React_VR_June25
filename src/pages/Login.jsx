import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(null)

  const loginfunc = async () => {
    let response = await axios.post("http://localhost:5000/user/login", {
      email,
      password,
    });
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      navigate("/about");
    }else{
        console.log(response.data)
        seterror(response.data.message)
    }
  };
  return (
    <div>
        {error? <div className="text-danger">{error}</div>:''}
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
      />

      <button onClick={loginfunc}>login</button>
    </div>
  );
};

export default Login;
