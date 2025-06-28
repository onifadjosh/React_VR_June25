import React from 'react'

const DisplayStudent = ({allStudents, deleteStudent}) => {
  return (
    <div>
        <div>
        {allStudents.map((student, index)=>(
          <div key={index}>
            <h1>{student.firstName+' '+student.lastName}</h1>
            <img src={student.profileImage} alt="" width={100} height={100} />
            <p>{student.email}</p>

            <button className="btn btn-danger" onClick={()=>deleteStudent(index)}>delete</button>
            <button className='btn btn-primary'>edit</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DisplayStudent