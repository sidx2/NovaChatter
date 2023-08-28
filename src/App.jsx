import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Container } from "react-bootstrap";
import Profile from "./pages/Profile";
import SearchResults from "./pages/SearchResults";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Container>
				<Routes>
					<Route exact path="/" element={<Feed />}></Route>
					<Route exact path="/NovaChatter" element={<Feed />}></Route>
					<Route exact path="/login" element={<Login />}></Route>
					<Route exact path="/signup" element={<Signup />}></Route>
					<Route
						exact
						path="/profile/:username"
						element={<Profile />}
					></Route>
					<Route
						exact
						path="/search/:searchText"
						element={<SearchResults />}
					></Route>
				</Routes>
			</Container>
		</BrowserRouter>
	);
}

export default App;
