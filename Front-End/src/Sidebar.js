import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import axios from "./axios";
import { useStateValue } from "./StateProvider";

import SidebarChat from "./SidebarChat";

function Sidebar({ rooms }) {
	const [input, setInput] = useState("");
	const [room, dispatch] = useStateValue();
	const [chatRooms, setChatRooms] = useState([]);

	const newRoom = async (e) => {
		e.preventDefault();

		axios.get("/rooms/sync").then((response) => {
			setChatRooms(
				response.data.map((rooms) => {
					return rooms.name;
				})
			);
			console.log(chatRooms);
		});

		axios.post("/rooms/new", {
			name: input,

			//add room to message collection
		});
		setInput("");
		dispatch({
			type: "CHANGE_ROOM",
			room: input,
		});
	};

	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Avatar src="https://lh3.googleusercontent.com/a-/AOh14GgQZUjXL0EpiHIUj8e0wTxaToAprFJWKe7AFOHDHA=s88-c-k-c0x00ffffff-no-rj-mo" />
				<div className="sidebar__headerRight">
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className="sidebar__search">
				<div className="sidebar__searchContainer">
					<SearchOutlined />

					<form>
						<input
							value={input}
							type="text"
							onChange={(e) => setInput(e.target.value)}
							placeholder="start a chat"
							type="text"
						/>
						<button onClick={newRoom} type="submit">
							Send Message
						</button>
					</form>
				</div>
			</div>

			<div className="sidebar__chats">
				{rooms.map((room) => (
					<SidebarChat roomName={room.name} />
				))}
			</div>
		</div>
	);
}

export default Sidebar;
