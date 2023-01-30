import { fetchChatsAction } from '../store/fetchChatsReduser';

export const fetchName = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/chats')
            .then((resolve) => resolve.json())
            .then((name) => dispatch(fetchChatsAction(name)));
    };
};
