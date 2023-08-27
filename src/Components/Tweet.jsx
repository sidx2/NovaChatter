import React from 'react'
import Card from 'react-bootstrap/Card';

const Tweet = (props) => {
    // console.log(props)
    return (
        <div>
            <Card className="mt-3">
                <Card.Header>{props.props.name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {props.props.content}
                    </Card.Text>
                    {props.props.likes} <Card.Link href="#">Like</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Tweet