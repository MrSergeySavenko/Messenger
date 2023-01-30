import React from 'react';
import { NavBar } from '../components/ChatNavBar/ChatNavBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChats } from '../asynAction/content';
import { useEffect } from 'react';

function Chat() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchChats());
    });

    const { chats, isLoading, error } = useSelector((state) => state.messageReducer);

    console.log(chats.length);

    const renderHeader = () => {
        if (isLoading) {
            return <div className='chat__notification'>Загрузка...</div>;
        } else if (chats) {
            return <div className='chat__notification'>Выберите чат</div>;
        } else {
            return <div className='chat__notification'>У вас нет ни одного чата</div>;
        }
    };

    return (
        <div className='chat'>
            <div className='chat__wrapper'>
                <div className='chat__nav'>
                    <NavBar />
                </div>
                <div className='chat__communion'>{renderHeader()}</div>
                <div className='chat__input'></div>
            </div>
        </div>
    );
}

export default Chat;

// {
//     isLoading ? (
//         <div className='chat__notification'>Загрузка...</div>
//     ) : chats.length === 0 ? (
//         <div className='chat__notification'>У вас нет ни одного чата</div>
//     ) : (
//         <div className='chat__notification'>Выберите чат</div>
//     );
// }
