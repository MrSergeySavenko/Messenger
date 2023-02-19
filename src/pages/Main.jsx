import React from 'react';
import { NavBar } from '../components/ChatNavBar/ChatNavBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChats } from '../__data__/actions/messageActions';
import { useEffect } from 'react';
import { ChatField } from '../components/ChatField/ChatField';

function Chat() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchChats());
    }, []);

    const { chats, isLoading, activeId } = useSelector((state) => state.messageReducer);

    const renderHeader = () => {
        if (isLoading) {
            return <div className='chat__notification'>Загрузка...</div>;
        } else if (chats.length !== 0) {
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
                <div className='chat__active'>
                    {activeId === '' ? (
                        <div className='chat__communion'>{renderHeader()}</div>
                    ) : (
                        <ChatField activeId={activeId} chats={chats} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Chat;
