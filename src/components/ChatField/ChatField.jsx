import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewMessege, addTime } from '../../store/messageReduser';
import { getActiveChat, getContinedTime, uniqueKey } from '../../utils';
import { getRandomMes } from '../../utils/index';
import moment from 'moment/moment';

export const ChatField = () => {
    const dispatch = useDispatch();

    const { chats, activeId } = useSelector((state) => state.messageReducer);

    const [value, setValue] = useState('');

    const addMessege = () => {
        if (value !== '') {
            dispatch(addNewMessege(value));
            setValue('');
            dispatch(addTime(moment().format()));
            console.log(chats.time);
        }
        setTimeout(() => dispatch(addNewMessege(getRandomMes(10))), 2000);
    };

    return (
        <div className='field'>
            <div className='field__messege'>
                {getActiveChat(chats, activeId).messeges.map((message, i) => (
                    <div key={uniqueKey(message, i)} className='field__mes'>
                        <p className='field__text'>{message}</p>
                        <p className='field__time' type='time'>
                            {chats.time}
                        </p>
                    </div>
                ))}
            </div>
            <div className='field__form'>
                <input
                    className='field__input'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={'Напишите что-нибудь'}
                />
                <button className='field__but' onClick={addMessege}>
                    ОТПРАВИТЬ
                </button>
            </div>
        </div>
    );
};
