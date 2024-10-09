import './App.css';
import Employee from './components/Employee'

function App() {
  
  return (
    <div className="App">
      { showEmployees  ? (
      <>
        <Employee name="Jack Songu" role="Intern"></Employee>
        <Employee role="Intern"></Employee>
        </>
        ) : (
        <h1>You Cannot see the Employees</h1>
      )}    

    </div>
  );
}

export default App;
