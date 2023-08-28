<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import axios from 'axios';

const Profile = () => {
    const { username } = useParams();
    const imgSrc = "https://www.pngitem.com/pimgs/m/404-4042686_my-profile-person-icon-png-free-transparent-png.png";

    const [user, setUser] = useState();

    useEffect(() => {
      const getUserInfo = async () => {
        const userInfo = await axios.get(`http://localhost:8000/api/show/${username}`);
        setUser(userInfo.data);
      }
    
    getUserInfo();
      return () => {
        
      }
    }, [])
    
    return (
        <div>
            <Card style={{ width: '15rem', marginTop: '15px' }}>
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
                    <Card.Text>
                        Hey there! I am using NovaChat.
                    </Card.Text>
                    <Card.Link href="#">Follow</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}
=======
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Profile = () => {
	const { username } = useParams();
>>>>>>> eff7a94ff0a23f9c4e276921b06ab446b586b5d8

	const [user, setUser] = useState(null);

	// Get User's details if token is present in localstorage
	useEffect(() => {
		const getUserInfo = async () => {
			const userInfo = await axios.get(
				"http://localhost:8000/api/userinfo/",
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem(
							"token"
						)}`,
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

	const imgSrc =
		"https://www.pngitem.com/pimgs/m/404-4042686_my-profile-person-icon-png-free-transparent-png.png";

	return (
		<div>
			<Card style={{ width: "15rem", marginTop: "15px" }}>
				<Card.Body>
					<Col xs={4} md={2}>
						<Image src={imgSrc} height="150px" rounded />
					</Col>
					<Card.Title>{user?.name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						@{username}
					</Card.Subtitle>
					<Card.Subtitle className="mb-2 text-muted">
						{/* Follower/following data */}
						16 following * 17 followers
					</Card.Subtitle>
					{/* Bio */}
					<Card.Text>Hi, I am willy</Card.Text>
					<Card.Link href="#">Follow</Card.Link>
					<Card.Link href="#">Another Link</Card.Link>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Profile;
