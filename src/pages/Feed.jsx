import { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Tweet from "../Components/Tweet";
import { Button } from "react-bootstrap";
import axios from "axios";

const Feed = () => {
	const [tweet, setTweet] = useState();
	const [tweets, setTweets] = useState([]);
	const [user, setUser] = useState();

	const handlePostTweet = async () => {
		const sentTweet = await axios.post("http://localhost:8000/api/tweets/", {
			username: user?.email,
			name: user?.name,
			content: tweet,
			likes: 0
		}, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		});
		
		setTweets([{ id: sentTweet?.data?.id, name: sentTweet?.data?.name, content: sentTweet?.data?.content, likes: sentTweet?.data?.likes }, ...tweets]);
		console.log(sentTweet);
		setTweet("");
	};

	useEffect(() => {
		const getUserInfo = async () => {
			const userInfo = await axios.get(
				"http://localhost:8000/api/userinfo/", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			}
			);
			setUser(userInfo.data);
		};

		const fetchTweets = async () => {
			const res = await axios.get("http://localhost:8000/api/tweets");
			console.log(res);
			const fetchedTweets = res.data;
			fetchedTweets.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

			setTweets(fetchedTweets);
		};

		if (localStorage.getItem("token")) {
			getUserInfo();
		}
		fetchTweets();

		// Useeffect cleanup
		return () => { };
	}, []);

	return (
		<div>
			<FloatingLabel
				controlId="floatingTextarea2"
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-evenly",
					marginTop: "15px",
				}}
			>
				<Form.Control
					as="textarea"
					placeholder="What's on your mind?"
					style={{ height: "75px", width: "70%" }}
					value={tweet}
					onChange={(e) => setTweet(e.target.value)}
					disabled={!user?.email}
				/>
				<Button
					className="btn-secondary"
					onClick={handlePostTweet}
					disabled={!user?.email}
				>
					{user?.email && <>Tweet</>}
					{!user?.email && <>Login to Tweet</>}
				</Button>
			</FloatingLabel>
			{tweets &&
				tweets.map((t) => (
					<Tweet
						key={t.id}
						props={{
							name: t.name,
							username: t.username,
							content: t.content,
							likes: t.likes,
						}}
					/>
				))}
		</div>
	);
};

export default Feed;
