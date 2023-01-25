import { useState } from 'react';
import { ChatDropdawn } from '../ChatDropdawn/ChatDropdawn';
import { useDispatch, useSelector } from 'react-redux';
import { openDropdawnAction, closeDropedawnAction } from '../../store/dropdawnReduser';

export const NavBar = () => {
    const dispatch = useDispatch();

    const open = useSelector((state) => state.dropdawnReduser.open);

    return (
        <div className='nav'>
            <p className='nav__head'>Чатик</p>
            <div>
                {open ? (
                    <ChatDropdawn
                        onClick={(e) => {
                            dispatch(closeDropedawnAction(e.target));
                            console.log(open);
                        }}
                    />
                ) : (
                    <button
                        className='nav__button'
                        onClick={() => {
                            dispatch(openDropdawnAction());
                            console.log(open);
                        }}
                    >
                        ВСЕ ЧАТЫ
                    </button>
                )}
            </div>
        </div>
    );
};
