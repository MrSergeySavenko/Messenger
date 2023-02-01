import { getChatsAction, getLoadingAction, getFailureAction } from '../store/messageReduser';

export const fetchChats = () => {
    return (dispatch) => {
        dispatch(getLoadingAction());
        fetch('http://localhost:3001/chats')
            .then((resolve) => resolve.json())
            .then((chats) => dispatch(getChatsAction(chats)))
            .catch((error) => dispatch(getFailureAction(error)));
    };
};
