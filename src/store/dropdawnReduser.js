const defaultState = {
    open: false,
};

const OPEN_DROPDAWN = 'OPEN_DROPDAWN';
const CLOSE_DROPDAWN = 'CLOSE_DROPDAWN';

export const dropdawnReduser = (state = defaultState, action) => {
    switch (action.type) {
        case OPEN_DROPDAWN:
            return { ...state, open: true };

        case CLOSE_DROPDAWN:
            return { ...state, open: false };

        default:
            return { ...state };
    }
};

export const openDropdawnAction = () => ({ type: OPEN_DROPDAWN });
export const closeDropedawnAction = () => ({ type: CLOSE_DROPDAWN });
