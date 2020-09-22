import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from "./axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	const [messages, setMessages] = useState([]);
	const [rooms, setRooms] = useState([]);

	//messages

	useEffect(() => {
		axios.get("/messages/sync").then((response) => {
			setMessages(response.data);
		});
	}, []);
	useEffect(() => {
		axios.get("/rooms/sync").then((response) => {
			setRooms(response.data);
		});
	}, []);

	useEffect(() => {
		const pusher = new Pusher("82a5892951d68fc51aab", {
			cluster: "us2",
		});

		const channel = pusher.subscribe("messages");
		channel.bind("inserted", (newMessage) => {
			setMessages([...messages, newMessage]);
		});

		return () => {
			channel.unbind_all();
			channel.unsubscribe();
		};
	}, [messages]);

	//rooms

	useEffect(() => {
		const pusher = new Pusher("82a5892951d68fc51aab", {
			cluster: "us2",
		});

		const channel = pusher.subscribe("rooms");
		channel.bind("inserted", (newRoom) => {
			setRooms([...rooms, newRoom]);
		});

		return () => {
			channel.unbind_all();
			channel.unsubscribe();
		};
	}, [rooms]);

	return (
		<div className="app">
			<div className="app__body">
				{/* <Router>
					<Switch> */}
				<Sidebar rooms={rooms} />
				{/* <Route path="/rooms/:roomI"> */}
				<Chat messages={messages} />
				{/* </Route>
						<Route path="/"> */}
				{/* <Chat messages={messages} /> */}
				{/* </Route>
					</Switch>
				</Router> */}
			</div>
		</div>
	);
}

export default App;
