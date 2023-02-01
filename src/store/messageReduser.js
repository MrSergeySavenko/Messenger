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
        case GET_LOADING:
            return { ...state, isLoading: true };
        case GET_CHATS:
            return { ...state, isLoading: false, chats: [action.payload] };
        case GET_FAILURE:
            return { ...state, isFalure: true, error: action.payload };

        default:
            return { ...state };
    }
};

export const getLoadingAction = () => ({ type: GET_LOADING });
export const getChatsAction = (payload) => ({ type: GET_CHATS, payload });
export const getFailureAction = (payload) => ({ type: GET_FAILURE, payload });
