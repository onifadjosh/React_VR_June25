import React, { useState } from "react";

const AddStudent = ({saveStudents}) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [gender, setgender] = useState("");
  const [email, setemail] = useState("");
  const [profileImage, setprofileImage] = useState("");

  let student= {firstName, lastName, gender, email, profileImage}
  return (
    <div>
      <h1>welcome, {firstName}</h1>
      <input
        type="text"
        placeholder="first name"
        onChange={(e) => setfirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="last name"
        onChange={(e) => setlastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="gender"
        onChange={(e) => setgender(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setemail(e.target.value)}
      />

      <input
        type="text"
        placeholder="profile image"
        onChange={(e) => setprofileImage(e.target.value)}
      />

      <button onClick={() => saveStudents(student)}>save student</button>

      <hr />
    </div>
  );
};

export default AddStudent;
