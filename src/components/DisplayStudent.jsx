import React, { useState } from "react";

const DisplayStudent = ({ allStudents, deleteStudent, editStudent }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [gender, setgender] = useState("");
  const [email, setemail] = useState("");
  const [profileImage, setprofileImage] = useState("");
  const [currentIndex, setcurrentIndex] = useState(0);
  return (
    <div>
      <div>
        {allStudents.map((student, index) => (
          <div key={index}>
            <h1>{student.firstName + " " + student.lastName}</h1>
            <img src={student.profileImage} alt="" width={100} height={100} />
            <p>{student.email}</p>

            <button
              className="btn btn-danger"
              onClick={() => deleteStudent(index)}
            >
              delete
            </button>
            <button
              className="btn btn-primary"
              data-bs-target="#exampleModal"
              data-bs-toggle="modal"
              onClick={() => setcurrentIndex(index)}
            >
              edit
            </button>
          </div>
        ))}
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
               Edit Student
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
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
            </div>
            <div className="modal-footer">
              <button
                // typeName="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>editStudent(currentIndex, {firstName, lastName, email, gender, profileImage})}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayStudent;
