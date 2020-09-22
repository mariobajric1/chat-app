export const initialState = {
	room: "",
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
