import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export const ChatDropdawn = ({ open, onClose }) => {
    const chatDropdawnRef = useRef(null);
    const chats = useSelector((state) => state.messageReducer.chats);

    useEffect(() => {
        const handleClick = (e) => {
            if (!chatDropdawnRef.current?.contains(e.target)) {
                onClose();
            }
        };

        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [open, onClose]);

    return (
        <div ref={chatDropdawnRef} className='drop'>
            <div className='drop__wrapper'>
                <div className='drop__chats'>
                    {chats?.map((chats) => (
                        <div>{chats.chatsName}</div>
                    ))}
                </div>
                <button className='drop__create'>Создать новый чат</button>
            </div>
        </div>
    );
};
