import React from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Profile = () => {
    const { username } = useParams();
    const imgSrc = "https://www.pngitem.com/pimgs/m/404-4042686_my-profile-person-icon-png-free-transparent-png.png";
    return (
        <div>
            <Card style={{ width: '15rem', marginTop: '15px' }}>
                <Card.Body>
                    <Col xs={4} md={2}>
                        <Image src={imgSrc} height="150px" rounded />
                    </Col>
                    <Card.Title>Willy William</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        @{username}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                        16 following * 17 followers
                    </Card.Subtitle>
                    <Card.Text>
                        Hi, I am willy
                    </Card.Text>
                    <Card.Link href="#">Follow</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Profile