import React, { useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "./axios";
import { useStateValue } from "./StateProvider";

function Chat({ messages }) {
	const [room, dispatch] = useStateValue();

	const [input, setInput] = useState("");

	const sendMessage = async (e) => {
		e.preventDefault();

		if (room.room === "main") {
			axios.post("/messages/new", {
				message: input,
				name: "demo app",
				timestamp: "Just now",
				received: false,
				roomID: room.room,
				//add room to message collection
			});
		} else {
			axios.post("/messages/new", {
				message: input,
				name: "demo app",
				timestamp: "Just now",
				received: false,
				roomID: room.room[0],
			});
		}

		setInput("");
	};
	return (
		<div className="chat">
			<div className="chat__header ">
				<Avatar />
				<div className="chat__headerInfo">
					<h3>{room.room}</h3>
					<p>Last seen...</p>
				</div>

				<div className="chat__headerRight">
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>

					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>

			<div className="chat__body">
				{messages
					.filter((message) => message.roomID == room.room)
					.map((message) => (
						<p
							className={`chat__message ${
								true && message.received && "chat__receiver"
							}`}
						>
							<span className="chat__name">{message.name}</span>
							{message.message} {message.received}
							<span className="chat__timestamp">{message.timestamp}</span>
						</p>
					))}
			</div>

			<div className="chat__footer">
				<InsertEmoticonIcon />
				<form>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="type a messagae"
						type="text"
					/>
					<button onClick={sendMessage} type="submit">
						Send Message
					</button>
				</form>
				<MicIcon />
			</div>
		</div>
	);
}
export default Chat;
