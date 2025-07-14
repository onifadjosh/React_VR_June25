import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Hello, we dont have what you are looking for at this time</h1>

      <button onClick={()=>navigate('/')} className="btn-primary btn ">Go to Home Page</button>
    </div>
  );
};

export default Notfound;
