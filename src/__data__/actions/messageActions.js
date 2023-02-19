export const GET_CHATS = 'GET_CHATS';
export const GET_LOADING = 'GET_LOADING';
export const GET_FAILURE = 'GET_FAILURE';
export const SET_ACTIVE_ID = 'SET_ACTIVE_ID';
export const ADD_NEW_MESSEGE = 'ADD_NEW_MESSEGE';
export const ADD_NEW_CHAT = 'ADD_NEW_CHAT';

export const getLoadingAction = () => ({ type: GET_LOADING });
export const getChatsAction = (payload) => ({ type: GET_CHATS, payload });
export const getFailureAction = (payload) => ({ type: GET_FAILURE, payload });
export const setActiveIdAction = (payload) => ({ type: SET_ACTIVE_ID, payload });
export const addNewMessege = (payload) => ({ type: ADD_NEW_MESSEGE, payload });
export const addNewChat = (payload) => ({ type: ADD_NEW_CHAT, payload });

export const fetchChats = () => {
    return (dispatch) => {
        dispatch(getLoadingAction());
        fetch('http://localhost:3001/chats')
            .then((resolve) => resolve.json())
            .then((chats) => dispatch(getChatsAction(chats)))
            .catch((error) => dispatch(getFailureAction(error)));
    };
};
