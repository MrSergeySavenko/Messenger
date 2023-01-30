const defaultState = {
    chats: [],
};

const FETCH_CHUTS_NAME = 'FETCH_CHUTS_NAME';

export const fetchChatsReduser = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_CHUTS_NAME:
            return { ...state, chats: [...state.chats, action.payload] };
        default:
            return state;
    }
};

export const fetchChatsAction = (payload) => ({ type: FETCH_CHUTS_NAME, payload });
