import {
    ADD_NEW_CHAT,
    ADD_NEW_MESSEGE,
    GET_CHATS,
    GET_FAILURE,
    GET_LOADING,
    SET_ACTIVE_ID,
} from '../actions/messageActions';
import { getRandomChatName, getRandomId } from '../utils';

const defaultState = {
    chats: [],
    isLoading: true,
    isFalure: false,
    error: [],
    activeId: '',
};

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
                            ? {
                                  ...chat,
                                  messeges: [...chat.messeges, action.payload.message],
                                  time: [...chat.time, action.payload.time],
                              }
                            : chat
                    ),
                ],
            };
        case ADD_NEW_CHAT:
            return {
                ...state,
                chats: [
                    ...state.chats,
                    {
                        id: getRandomId(),
                        chatName: getRandomChatName(action.payload),
                        messeges: [],
                        time: [],
                    },
                ],
            };
        default:
            return { ...state };
    }
};
