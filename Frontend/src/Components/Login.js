import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Headers from './Headers';

function Login() {
  const [data, setData] = useState([]);
  const [userInput, setUser] = useState('');
  const [passInput, setPass] = useState('');
  const [valid, setValid] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
        const result = await axios.get('http://localhost/Food%20Delivery/login.php');
        console.warn('result', result.data);
        setData(result.data);
      
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (localStorage.getItem('user-det')) {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    if (valid === 1) {
      navigate('/');
    }
  }, [valid]);

  function Check(e) {
    const userData = data.find((user) => user.userInput === userInput);

    if (userData) {
      if (userData.passInput !== passInput) {
        alert('Invalid Password');
      } else {
        setValid(1);
        alert('Login successful');
        console.log('login');
        console.log(valid);

        localStorage.setItem('user-det', userInput);
      }
    } else {
      alert('Invalid User');
    }
    e.preventDefault();
  }

  return (
    <>
      <Headers />
      <h1>Login</h1>
      <div className="login-container">
        <h1 className="heading-text">Login</h1>
        <form>
          <input type="text" placeholder="Email or Username" className="input-text" onChange={(e) => setUser(e.target.value)} /><br /><br />
          <input type="password" placeholder="Enter your password" className="input-text" onChange={(e) => setPass(e.target.value)} /><br></br>
          <input type="checkbox" className="remember" /><span>Remember Me</span><br />
          <span className="forget-text">Forget Password?</span><br />
          <button type="submit" className="login-btn" onClick={Check}>Login</button><br />
          <span onClick={() => navigate('/register')}>create account</span>
        </form>
      </div>
    </>
  );
}

export default Login;
