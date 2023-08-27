import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();

    const redirectToLogin = () => {
        // Replace '/target-route' with the actual path you want to redirect to
        navigate('/login');
      };
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
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password Again" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Signup
      </Button>
    </Form>
      <Form.Group className="mb-3">
        <p>Already have an account? <Button onClick={redirectToLogin}>Login</Button> </p>

      </Form.Group>
    </>
  );
}

export default Signup;