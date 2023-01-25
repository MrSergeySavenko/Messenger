const defaultState = {
    chatsName: [],
    chats: [],
};

const FETCH_CHUTS = 'FETCH_CHUTS';

export const fetchChuts = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_CHUTS:
            return { ...state, chatsName: [...state.chats, action.payload] };
        default:
            return state;
    }
};
