//importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Rooms from "./dbRooms.js";
import Pusher from "pusher";
import cors from "cors";

//app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
	appId: "1074913",
	key: "82a5892951d68fc51aab",
	secret: "d3d701bc5c6a04fe265f",
	cluster: "us2",
	encrypted: true,
});

//middleware
app.use(express.json());
app.use(cors());

//DB config
let url =
	"mongodb+srv://admin:d79Ydy6BZA8QaUex@cluster0.rwg4k.mongodb.net/whatsappdb?retryWrites=true&w=majority";
mongoose.connect(url, {
	uesrCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
	console.log("connect");

	const msgCollection = db.collection("messagecontents");
	const changeStream = msgCollection.watch();

	changeStream.on("change", (change) => {
		if (change.operationType == "insert") {
			const messageDetails = change.fullDocument;
			pusher.trigger("messages", "inserted", {
				//user if user not name
				name: messageDetails.name,
				message: messageDetails.message,
				timestamp: messageDetails.timestamp,
				received: messageDetails.received,
				roomID: messageDetails.roomID,
			});
		} else {
			console.log("pusher error");
		}
	});
});

db.once("open", () => {
	console.log("connect");

	const roomCollection = db.collection("rooms");
	const changeStream = roomCollection.watch();

	changeStream.on("change", (change) => {
		if (change.operationType == "insert") {
			const roomDetails = change.fullDocument;
			pusher.trigger("messages", "inserted", {
				//user if user not name
				name: roomDetails.name,
			});
		} else {
			console.log("pusher error");
		}
	});
});

// ???

//api routes -- 200 means ok ; 500 means error
app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/messages/sync", (req, res) => {
	Messages.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

app.post("/messages/new", (req, res) => {
	const dbMessage = req.body;

	Messages.create(dbMessage, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});

app.get("/rooms/sync", (req, res) => {
	Rooms.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

app.post("/rooms/new", (req, res) => {
	const dbRoom = req.body;

	Rooms.create(dbRoom, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});

// listener
app.listen(port, () => console.log(`listening on: ${port}`));
7;
