import React from 'react';
import { NavBar } from '../components/NavBar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChats } from '../asynAction/content';
import { useEffect } from 'react';

function Chat() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchChats());
    });

    const chats = useSelector((state) => state.messageReducer.chats);
    const isLoading = useSelector((state) => state.messageReducer.isLoading);
    const error = useSelector((state) => state.messageReducer.error);

    return (
        <div className='chat'>
            <div className='chat__wrapper'>
                <div className='chat__nav'>
                    <NavBar />
                </div>
                <div className='chat__communion'>
                    {isLoading ? (
                        <div className='chat__notification'>Загрузка...</div>
                    ) : chats.length !== 0 ? (
                        <div className='chat__notification'>У вас нет ни одного чата</div>
                    ) : (
                        <div className='chat__notification'>Выберите чат</div>
                    )}
                </div>
                <div className='chat__input'></div>
            </div>
        </div>
    );
}

export default Chat;
