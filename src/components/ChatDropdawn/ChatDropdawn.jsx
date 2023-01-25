import { useDispatch, useSelector } from 'react-redux';
import { closeDropedawnAction } from '../../store/dropdawnReduser';

export const ChatDropdawn = () => {
    const dispatch = useDispatch();

    const open = useSelector((state) => state.dropdawnReduser.open);

    return (
        <div className='drop'>
            <div
                className='drop__wrapper'
                onClick={(e) => {
                    dispatch(closeDropedawnAction(e.target));
                }}
            >
                <div className='drop__chats'></div>
                <button className='drop__create'>Создать новый чат</button>
            </div>
        </div>
    );
};
