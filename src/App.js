import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [name, setName] = useState('No Name');
  const [employees, setEmployees] = useState(
    [{ name: "Yash", role: "Software Developer", salary: "£50,000", img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg" },
    { name: "Lizzy", role: "Consultant", salary: "£70,000", img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" },
    { name: "John", role: "Manager", salary: "£30,000", img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
    { name: "Melanie", role: "Software Engineer", salary: "£56,000", img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" },
    { name: "Corey", role: "The Devlops Guy", salary: "£40,000", img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" },
    { name: "Natalie", role: "Senior Intern", salary: "£41,000", img: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg" },
    ]
  );
  return (
    <div className="App bg-red-300">
      <h1>React App</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} placeholder={name} />
      <div className="flex flex-wrap justify-center">
        {employees.map((employee) => {
          return <Employee key={uuidv4()} name={employee.name} role={employee.role} salary={employee.salary} img={employee.img} />
        })}
      </div>
    </div>
  );
}

export default App;
