import { useEffect, useRef } from 'react';
import { fetchChats } from '../../asynAction/content';
import { useDispatch, useSelector } from 'react-redux';

export const ChatDropdawn = ({ open, setOpen, onClose }) => {
    const chatDropdawnRef = useRef(null);
    const dispatch = useDispatch();
    const { chats } = useSelector((state) => state.messageReducer.chats);

    useEffect(() => {
        if (!open) return;

        const handleClick = (e) => {
            if (!chatDropdawnRef.current) return;
            if (!chatDropdawnRef.current.contains(e.target)) {
                onClose();
            }
        };

        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div ref={chatDropdawnRef} className='drop'>
            <div className='drop__wrapper'>
                <div className='drop__chats'>
                    {chats.map((chats) => (
                        <div>{chats.chatsName}</div>
                    ))}
                </div>
                <button className='drop__create'>Создать новый чат</button>
            </div>
        </div>
    );
};
