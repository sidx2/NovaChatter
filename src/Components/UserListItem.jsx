import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import "./UserListItem.css"
import { useNavigate } from 'react-router-dom';

const UserListItem = ({ name, username, followers, following }) => {
    const navigate = useNavigate();
  return (
    <Card 
        className="mb-3"
        onClick={() => navigate(`/profile/${username}`)}
    >
      <Card.Body>
        <Row className="align-items-center">
          <Col xs="auto">
            <img
              src="https://via.placeholder.com/64"
              alt="User Profile"
              className="rounded-circle"
              style={{ width: '64px', height: '64px' }}
            />
          </Col>
          <Col>
            <h5>{name}</h5>
            <p> @{username}</p>
            <Row>
              <Col>
                <p className="mb-0">Followers: {followers}</p>
              </Col>
              <Col>
                <p className="mb-0">Following: {following}</p>
              </Col>
            </Row>
          </Col>
          <Col xs="auto">
            <Button variant="primary">Follow</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default UserListItem;
