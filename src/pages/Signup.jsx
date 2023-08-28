import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Signup() {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [password_confirmation, setPassword_confirmation] = useState("");

	const handleSignup = async (e) => {
		e.preventDefault();
		console.log(username, password, password_confirmation);
		try {
			const res = await axios.post("http://localhost:8000/api/signup", {
				name,
				username,
				password,
				password_confirmation,
			});
			localStorage.setItem("token", res.data.token);
			console.log(res);
			if (res.status === 201) navigate("/");
		} catch (err) {
			console.error(err);
		}
	};

	const redirectToLogin = () => {
		navigate("/login");
	};

	return (
		<>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter your name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
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
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password Again"
						value={password_confirmation}
						onChange={(e) =>
							setPassword_confirmation(e.target.value)
						}
					/>
				</Form.Group>
				<Button variant="primary" type="submit" onClick={handleSignup}>
					Signup
				</Button>
			</Form>
			<Form.Group className="mb-3">
				<p>
					Already have an account?{" "}
					<Button onClick={redirectToLogin}>Login</Button>{" "}
				</p>
			</Form.Group>
		</>
	);
}

export default Signup;
