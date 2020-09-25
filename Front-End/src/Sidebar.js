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
				<Avatar src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed991cf4-7c8c-4530-b6ba-a3abf3ab2eae/dcl44cw-02dee5f4-c22d-43ce-99d3-5184ab514e81.png/v1/fill/w_600,h_679,strp/super_mario__yoshi_icon_2d_by_joshuat1306_dcl44cw-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02NzkiLCJwYXRoIjoiXC9mXC9lZDk5MWNmNC03YzhjLTQ1MzAtYjZiYS1hM2FiZjNhYjJlYWVcL2RjbDQ0Y3ctMDJkZWU1ZjQtYzIyZC00M2NlLTk5ZDMtNTE4NGFiNTE0ZTgxLnBuZyIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZN4NY6XTNnDkPwE_514KlVEVoUyskzOhG_FaKxGvAwo" />
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
