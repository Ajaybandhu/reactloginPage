import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form>  
    <center> <h1> Student Login Form </h1> </center>   
        <div className="container">   
            <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" required/>  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required/>  
            <button type="submit">Login</button>   
            <input type="checkbox" checked="checked"/> Remember me   
            <button type="button" class="cancelbtn"> Cancel</button>   
            Forgot <a href="#"> password? </a>   
        </div>   
    </form>     
  );
}

export default App;
