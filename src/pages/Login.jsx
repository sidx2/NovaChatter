import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const redirectToSignup = () => {
    navigate("/signup")
  }
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="Enter username" />
        <Form.Text className="text-muted">
          Choose a unique short and crisp username.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
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