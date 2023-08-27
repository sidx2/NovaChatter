import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Tweet from '../Components/Tweet';
import { Button } from 'react-bootstrap';

const Feed = () => {
  const [tweet, setTweet] = useState();
  const [tweets, setTweets] = useState([]);

  const handlePostTweet = () => {
    setTweets([{name: "The Name", content: tweet, likes: 32}, ...tweets]);
    setTweet("");
  }
  return (
    <div>
       <FloatingLabel controlId="floatingTextarea2" style={{display: 'flex', alignItems:'center', justifyContent: 'space-evenly', marginTop: '15px'}}>
        <Form.Control
          as="textarea"
          placeholder="What's on your mind?"
          style={{ height: '75px', width: '70%' }}
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        />
         <Button className="btn-secondary" onClick={handlePostTweet}>Tweet</Button>
      </FloatingLabel>
        {tweets && tweets.map((t) => (
          <Tweet props={{name: t.name, content:t.content, likes: t.likes}}/>
        ))}
    </div>
  )
}

export default Feed