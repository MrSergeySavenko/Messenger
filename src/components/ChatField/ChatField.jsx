import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveChat, getContinedTime, uniqueKey } from '../../__data__/utils';
import { getRandomMes } from '../../__data__/utils/index';
import moment from 'moment/moment';
import { addNewMessege } from '../../__data__/actions/messageActions';
import { Button } from '../ChatButton/ChatButton';

export const ChatField = () => {
    const [value, setValue] = useState('');
    const [disabled, setDisabled] = useState(false);

    const dispatch = useDispatch();

    const { chats, activeId } = useSelector((state) => state.messageReducer);

    const addMessege = () => {
        if (value !== '') {
            dispatch(addNewMessege({ message: value, time: moment().format() }));
            setValue('');
            setDisabled(true);
            setTimeout(() => {
                dispatch(addNewMessege({ message: getRandomMes(), time: moment().format() }));
                setDisabled(false);
            }, 2000);
        }
    };

    return (
        <div className='field'>
            <div className='field__messege'>
                {getActiveChat(chats, activeId).messeges.map((message, i) => (
                    <div key={uniqueKey(message, i)} className='field__mes'>
                        <p className='field__text'>{message}</p>
                        <p className='field__time' type='time'>
                            {getContinedTime(getActiveChat(chats, activeId).time[i])}
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
                <div className='field__button'>
                    <Button onClick={addMessege} disabled={disabled}>
                        ОТПРАВИТЬ
                    </Button>
                </div>
            </div>
        </div>
    );
};
