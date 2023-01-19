import { getChatsAction, getLoadingAction, getFailureAction } from '../store/messageReduser';

export const fetchChats = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/chats')
            .then((resolve) => resolve.json())
            .then((loading) => dispatch(getChatsAction(loading)))
            .then((data) => dispatch(getLoadingAction(data)))
            .catch((error) => dispatch(getFailureAction(error)));
    };
};
