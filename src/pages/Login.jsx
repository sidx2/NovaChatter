import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const res = await axios.post("http://localhost:8000/api/login", {username, password});
    console.log("res", res);
    localStorage.setItem("token", res.data.token)
    if (res.status === 201) navigate("/");
    // else alert(res.data.messag)
  }
  const redirectToSignup = () => {
    navigate("/signup")
  }
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Text className="text-muted">
          Choose a unique short and crisp username.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
      </Form.Group>
      <Button 
        variant="primary" 
        type="submit"
        onClick={handleLogin}
      >
        Login
      </Button>
    </Form>
    <Form.Group className="mb-3">
        <p>Does not have an account? <Button onClick={redirectToSignup}>Create account</Button> </p>

      </Form.Group>
    </>
  );
}

export default Login;