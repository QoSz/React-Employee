import './App.css';
import AddEmployee from './components/AddEmployee';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [employees, setEmployees] = useState(
    [{ id: 1, name: "Yash", role: "Software Developer", salary: "£50,000", img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg" },
    { id: 2, name: "Lizzy", role: "Consultant", salary: "£70,000", img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" },
    { id: 3, name: "John", role: "Manager", salary: "£30,000", img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
    { id: 4, name: "Melanie", role: "Software Engineer", salary: "£56,000", img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" },
    { id: 5, name: "Corey", role: "The Devlops Guy", salary: "£40,000", img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" },
    { id: 6, name: "Natalie", role: "Senior Intern", salary: "£41,000", img: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg" },
    ]
  );

  function updateEmployee(id, newName, newRole, newSalary) {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === id) {
        return { ...employee, name: newName, role: newRole, salary: newSalary };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, salary, img) {
    newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      salary: salary,
      img: img
    }
    setEmployees([...employees, newEmployee]);
  }

  return (
    <div className="App">
      <h1>React App</h1>
      <div className="flex flex-wrap justify-center">
        {employees.map((employee) => {
          return <Employee key={employee.id} id={employee.id} name={employee.name} role={employee.role} salary={employee.salary} img={employee.img} updateEmployee={updateEmployee} />
        })}
      </div>
      <AddEmployee newEmployee={newEmployee}/>
    </div>
  );
}

export default App;
