import './App.css';
import Form from './Form'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App vertical-center">
      

      <div className="container" >
        <div className="header">
          <h1 >
            Welcome to <a href="https://covvaccine.com">Covvaccine!</a>
          </h1> 
        </div>
        <div>
          <Form />  
          </div>       
        <div className="footer">
          <p>
            Developed by Digambar @2021  
          </p>
        </div>
        </div>
    </div>
  );
}

export default App;
