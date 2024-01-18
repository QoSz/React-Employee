import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('No Name');
  return (
    <div className="App bg-red-300">
      <h1>React App</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} placeholder={name}/>
      <Employee name="Yash" role="Software Developer" salary="£50,000"/>
      <Employee name="Crizi" salary="£25,000"/>
      <Employee name={name} role="Consultant" salary="£70,000"/>
    </div>
  );
}

export default App;
