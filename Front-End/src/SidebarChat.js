import React, { useState } from "react";
import "./SidebarChat.css";
import { Avatar, Button } from "@material-ui/core";
import { useStateValue } from "./StateProvider";

function SidebarChat({ roomName }) {
	const [room, dispatch] = useStateValue();

	const [currentRoom, setCurrentRoom] = useState(room.room);

	const changeRoom = (e) => {
		setCurrentRoom(roomName);
		dispatch({
			type: "CHANGE_ROOM",
			room: currentRoom,
		});
	};

	return (
		<div onClick={changeRoom} className="sidebarChat">
			<form>
				{/* <button></button> */}
				<div className="sidebarChat__info">
					<h2>{roomName}</h2>
				</div>
			</form>
		</div>
	);
}
export default SidebarChat;
