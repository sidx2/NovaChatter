import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
	const navigate = useNavigate();
	const [searchText, setSearchText] = useState("");
	const [user, setUser] = useState();

	const handleLogout = () => {
		localStorage.removeItem("token");
		setUser(null);
		navigate("/login");
	};

	// Get User's details if token is present in localstorage
	useEffect(() => {
		const getUserInfo = async () => {
			const userInfo = await axios.get(
				"https://17f4-3-110-143-20.ngrok-free.app/api/userinfo/",
				{
					headers: {
						"ngrok-skip-browser-warning": true,
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				}
			);
			setUser(userInfo.data);
		};
		if (localStorage.getItem("token")) {
			getUserInfo();
		}

		return () => {};
	}, []);

	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container fluid>
				<img src="/bird.png" height="40px" alt="" />
				<Navbar.Brand onClick={() => navigate("/")}>
					{" "}
					NovaChatter
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					></Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search for a user"
							className="me-2"
							aria-label="Search"
							value={searchText}
							onChange={(e) => setSearchText(e.target.value)}
						/>
						<Button
							variant="outline-success"
							onClick={() => navigate(`/ search / ${ searchText }`)}
						>
							Search
						</Button>
					</Form>
					{!localStorage.getItem("token") && (
						<Button
							style={{ marginLeft: "15px" }}
							onClick={() => navigate("/login")}
						>
							Login
						</Button>
					)}

					<Navbar.Brand
						onClick={() => navigate(`/ profile / ${ user?.email }`)}
						style={{ marginLeft: "15px" }}
					>
						{user?.email && "@"}
						{user?.email}
					</Navbar.Brand>
					{localStorage.getItem("token") && (
						<Button
							style={{ marginLeft: "10px" }}
							onClick={handleLogout}
							className="btn-danger"
						>
							Logout
						</Button>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
