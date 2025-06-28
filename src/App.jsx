import { useState } from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Formm from "./components/Formm";
import AddStudent from "./components/AddStudent";
import DisplayStudent from "./components/DisplayStudent";

function App() {
  let owner = "Pamilerin";
  let calcNumber = 2222 + 3333;

  // const [first, setfirst] = useState(second)
  // const [initial state, function to change the state] = useState(initial value)

  const [num, setnum] = useState(100)


  const increase =(numb)=>{

    setnum(numb+1)
    console.log(num)
  }
  
  const shout=()=>{
    alert('hi')
  }
  const [allStudents, setallStudents] = useState([]);
  const saveStudents = (student) => {
    // let student = {
    //   firstName,
    //   lastName,
    //   gender,
    //   email,
    //   profileImage
    // };
    // let names= ['sade', 'john', 'pampam']
    // let newNames= ['feranmi', 'dami', ...names]
    // console.log(newNames)
    setallStudents([student, ...allStudents]);
  };

  const deleteStudent=(index)=>{
    console.log(index)
    let newStudents = [...allStudents]
    console.log(newStudents)
    newStudents.splice(index,1)
    setallStudents(newStudents)
  }
  

  return (
    //react hooks, are helpers in react that perform different functions like state management, component monitoring and component lifecycle, they start with the word 'use'
    //use state is a react hook, used for state management in react
    <>
      <Navbar />
      <h1>We are in class learning React JS</h1>

      <h1>{calcNumber}</h1>

      <h1>{num}</h1>

      <button onClick={()=>increase(num)}>click to increase number</button>

      <Button title='delete' color='btn-success' func={shout}/>

      <Button title='danger' color='btn-danger'/>
      <Button title="run oo" color='btn-primary'/>
      

    <AddStudent saveStudents={saveStudents}/>
    <DisplayStudent allStudents={allStudents} deleteStudent={deleteStudent}/>
    </>
  );
}

export default App;
