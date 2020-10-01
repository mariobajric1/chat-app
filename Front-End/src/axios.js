import axios from "axios";

const instance = axios.create({
	baseURL: "https://chat-appserver.herokuapp.com",

	//deployed url
});

export default instance;
