export const initialState = {
	room: "Initial Chat",
};

// Selector
const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "CHANGE_ROOM":
			return {
				room: [action.room],
			};

		default:
			return state;
	}
};
export default reducer;
