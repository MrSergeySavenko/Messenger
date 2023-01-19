const defaultState = {
    chats: [],
    isLoading: true,
    isFalure: false,
    error: [],
};

const GET_CHATS = 'GET_CHATS';
const GET_LOADING = 'GET_LOADING';
const GET_FAILURE = 'GET_FAILURE';

export const messageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_CHATS:
            return { ...state, isLoading: false };
        case GET_LOADING:
            return { ...state, chats: action.payload };
        case GET_FAILURE:
            return { ...state, isFalure: true, error: action.payload };

        default:
            return { ...state };
    }
};

export const getChatsAction = () => ({ type: GET_CHATS });
export const getLoadingAction = (payload) => ({ type: GET_LOADING, payload });
export const getFailureAction = (payload) => ({ type: GET_FAILURE, payload });
