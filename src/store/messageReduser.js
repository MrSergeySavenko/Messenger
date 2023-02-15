const defaultState = {
    chats: [],
    isLoading: true,
    isFalure: false,
    error: [],
    activeId: '',
    id: 0,
    time: [],
};

const GET_CHATS = 'GET_CHATS';
const GET_LOADING = 'GET_LOADING';
const GET_FAILURE = 'GET_FAILURE';
const SET_ACTIVE_ID = 'SET_ACTIVE_ID';
const ADD_NEW_MESSEGE = 'ADD_NEW_MESSEGE';
const ADD_TIME = 'ADD_TIME';

export const messageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_LOADING:
            return { ...state, isLoading: true };
        case GET_CHATS:
            return { ...state, isLoading: false, chats: action.payload };
        case GET_FAILURE:
            return { ...state, isFalure: true, error: action.payload };
        case SET_ACTIVE_ID:
            return { ...state, activeId: action.payload };
        case ADD_NEW_MESSEGE:
            return {
                ...state,
                chats: [
                    ...state.chats.map((chat) =>
                        chat.id === state.activeId
                            ? { ...chat, messeges: [...chat.messeges, action.payload] }
                            : chat
                    ),
                ],
            };
        case ADD_TIME:
            return {
                ...state,
                chats: [
                    ...state.chats.map((chat) =>
                        chat.id === state.activeId ? { ...chat, time: [...chat.time, action.payload] } : chat
                    ),
                ],
            };

        default:
            return { ...state };
    }
};

export const getLoadingAction = () => ({ type: GET_LOADING });
export const getChatsAction = (payload) => ({ type: GET_CHATS, payload });
export const getFailureAction = (payload) => ({ type: GET_FAILURE, payload });
export const setActiveIdAction = (payload) => ({ type: SET_ACTIVE_ID, payload });
export const addNewMessege = (payload) => ({ type: ADD_NEW_MESSEGE, payload });
export const addTime = (payload) => ({ type: ADD_TIME, payload });
