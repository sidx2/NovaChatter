import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import axios from "axios";

const Profile = () => {
	const { username } = useParams();
	const imgSrc =
		"https://www.pngitem.com/pimgs/m/404-4042686_my-profile-person-icon-png-free-transparent-png.png";

	const [user, setUser] = useState();

	useEffect(() => {
		const getUserInfo = async () => {
			const userInfo = await axios.get(
				`https://17f4-3-110-143-20.ngrok-free.app/api/show/${username}`,
				{
					headers: {
						"ngrok-skip-browser-warning": true
					}
				}
			);
			setUser(userInfo.data);
		};

		getUserInfo();
		return () => {};
	}, [username]);

	return (
		<div>
			<Card style={{ width: "15rem", marginTop: "15px" }}>
				<Card.Body>
					<Col xs={4} md={2}>
						<Image src={imgSrc} height="150px" rounded />
					</Col>
					<Card.Title>{user?.name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						@{user?.email}
					</Card.Subtitle>
					<Card.Subtitle className="mb-2 text-muted">
						16 following * 17 followers
					</Card.Subtitle>
					<Card.Text>Hey there! I am using NovaChat.</Card.Text>
					<Card.Link href="#">Follow</Card.Link>
					<Card.Link href="#">Another Link</Card.Link>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Profile;
