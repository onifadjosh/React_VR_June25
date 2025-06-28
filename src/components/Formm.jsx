import React, { useState } from "react";

const Formm = () => {
  
  const [allStudents, setallStudents] = useState([]);

  

  // const handleChange=(event)=>{
  //     console.log(event.target.value)
  //     setfirstName(event.target.value)
  //     // console.log('I am working')
  // }

  const saveStudents = () => {
    let student = {
      firstName,
      lastName,
      gender,
      email,
      profileImage
    };
    // let names= ['sade', 'john', 'pampam']
    // let newNames= ['feranmi', 'dami', ...names]
    // console.log(newNames)
    setallStudents([student, ...allStudents]);
  };
  return (
    

      <div>
        {allStudents.map((student, index)=>(
          <div key={index}>
            <h1>{student.firstName+' '+student.lastName}</h1>
            <img src={student.profileImage} alt="" width={100} height={100} />
            <p>{student.email}</p>
          </div>
        ))}
      </div>



  );
};

export default Formm;
