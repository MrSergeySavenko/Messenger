import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveIdAction } from '../../store/messageReduser';
import { uniqueKey } from '../../utils';

export const ChatDropdown = ({ open, onClose }) => {
    const chatDropdownRef = useRef(null);

    const dispatch = useDispatch();

    const { chats, activeId } = useSelector((state) => state.messageReducer);

    useEffect(() => {
        const handleClick = (e) => {
            if (!chatDropdownRef.current?.contains(e.target)) {
                onClose();
            }
        };

        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [open, onClose]);

    const handlePickChat = (id) => {
        dispatch(setActiveIdAction(id));
        console.log(activeId);
    };

    return (
        <div ref={chatDropdownRef} className='drop'>
            <div className='drop__wrapper'>
                <div className='drop__chats'>
                    {chats?.map((chat, i) => (
                        <div
                            key={uniqueKey(chat.chatName, i)}
                            className='drop__chat-name'
                            onClick={() => handlePickChat(chat.id)}
                        >
                            {chat.chatName}
                        </div>
                    ))}
                </div>
                <button className='drop__create'>Создать новый чат</button>
            </div>
        </div>
    );
};
